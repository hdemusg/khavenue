import requests
import json
from geopy.geocoders import Nominatim  
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
zipcode = '30332'
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

### Pull inventory for each location in locations
product_url = kroger_url + 'products'
for l in locations:
    l_id = l
    headers2 = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {access_token}',
        }
    params2 = {
    'filter.term': "milk",
    'filter.locationId' : l_id,
    }
    response2 = requests.get(product_url, headers=headers2, params=params2)
    products = json.loads(response2.text).get('data')
    if len(products) == 0:
        del(locations[l_id])
for l in locations:
    print(locations[l]['address'])









