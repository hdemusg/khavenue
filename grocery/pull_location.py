import requests
import json
import geocoder

g = geocoder.ip('me')
print(g.latlng)
coordinates = str(g.latlng[0]) + "%2C" + str(g.latlng[1])
url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location= " + coordinates + "&rankby=distance&type=grocery_or_supermarket&key=AIzaSyDU4mGNlphDU43qEQV8p81wbC4USA87gl4"
payload={}
headers = {}
response = requests.request("GET", url, headers=headers, data=payload)
response_obj = json.loads(response.text)
places = response_obj['results']
closest_place = places[0]
print(closest_place)
