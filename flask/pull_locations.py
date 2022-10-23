import requests
import json
import geopy.distance
'''
g = geocoder.ip('me')
coordinates = g.latlng
# coordinates = [47.60621, -122.33207]
print(coordinates)
coordinates = str(coordinates[0]) + "%2C" + str(coordinates[1])
url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location= " + coordinates + "&rankby=distance&type=grocery_or_supermarket&keyword=kroger&key=AIzaSyDU4mGNlphDU43qEQV8p81wbC4USA87gl4"
payload = {}
headers = {}
response = requests.request("GET", url, headers=headers, data=payload)
response_obj = json.loads(response.text)
places = response_obj['results']
print(len(places))
print(places[0]['name'])
'''


def pullLocations(zipcode, items):
    kroger_url = "https://api.kroger.com/v1/"

    ### OAuth2 token generation
    auth_url = kroger_url + "connect/oauth2/token"
    encoded_token = "a2hhdmVudWUtZTZiY2IxODBhNjBmMjI5NTMzOWNlNGE1Njc3YjI4ZmQ0NjI2MTUyODU1MzU4NjIyMjE1Okl6RkpQNTFra0dxcFFCSUtISXBXbHI5RGN3M1JPeWJnYjNpY0hnR00="
    headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': f'Basic {encoded_token}'
    \
    }
    payload = {
    'grant_type': 'client_credentials',
    'scope':['product.compact'],
    }
    response = requests.post(auth_url, headers=headers, data=payload)
    access_token = json.loads(response.text).get('access_token')


    ### Generate locations within ten miles of zip code
    zipcode = zipcode
    headers1 = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {access_token}',
    }
    params = {
        'filter.zipCode.near' : zipcode,
        'filter.chain': 'Kroger'
    }
    locations_url = kroger_url + 'locations'
    response1 = requests.get(locations_url, headers=headers1, params=params)
    data = json.loads(response1.text).get('data')
    # print(data)
    locations = {}
    for location in data:
        address = location.get("address")
        address1 = address.get("addressLine1")
        address2 = address.get("addressLine2")
        if address2 is not None:
            totalAddressLine = address1 + address2
        else:
            totalAddressLine = address1
        city = address.get("city")
        state = address.get("state")
        zipcode = address.get("zipCode")
        fullAddress = f"{totalAddressLine}, {city}, {state}, {zipcode}"
        locations[location.get("locationId")] = {"address": fullAddress}

    ### Pull inventory for each location in locations- this is also where heuristic for ranking data is determined
    product_url = kroger_url + 'products'
    food_items = json.loads(items)['results']
    final_locations = []
    for l in locations:
        location_zip = locations[l]["address"].split(",")[-1].strip()
        count_items = 0
        freq_items = 0
        l_id = l
        headers2 = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token}',
        }
        for food in food_items:
            params2 = {
            'filter.term': food,
            'filter.locationId' : l_id,
            }
            response2 = requests.get(product_url, headers=headers2, params=params2)
            products = json.loads(response2.text).get('data')
            if len(products) > 0:
                count_items += 1
                freq_items += len(products)
        if count_items >= len(food_items):
            url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + str(location_zip) + "&key=AIzaSyCOS1pA1dN5XWyseeuvB4lFXTNJqs9k7AM"
            url2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + str(zipcode) + "&key=AIzaSyCOS1pA1dN5XWyseeuvB4lFXTNJqs9k7AM"
            response_1 = requests.post(url1)
            response_2 = requests.post(url2)
            location_data = json.loads(response_1.text)['results'][0]
            origin_data = json.loads(response_2.text)['results'][0]
            l1, l2 = location_data['geometry']['location']['lat'], location_data['geometry']['location']['lng']
            o1, o2 = origin_data['geometry']['location']['lat'], origin_data['geometry']['location']['lng']
            coord_l = (l1, l2)
            coord_o = (o1, o2)
            # print(l1, l2)
            # print(o1, o2)
            dist = geopy.distance.geodesic(coord_o, coord_l).km
            final_locations.append([locations[l]["address"], freq_items + dist])
    return json.dumps({'locations': final_locations})


# print(pullLocations('30332', json.dumps({"results": ['milk', 'pizza', 'strawberries']})))