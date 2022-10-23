from curses import raw
from flask import Flask, render_template, request
from getrecipes import getRecipe
import requests
import json
from pull_locations import pullLocations 
from language import entityAnalysis
from geopy.extra.rate_limiter import RateLimiter
from geopy.geocoders import Nominatim

app = Flask(__name__)

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/recipes/<keyword>")
def recipes(keyword):
    return getRecipe(keyword)
'''
    dat = raw_data["hits"]
    return(dat)

def extractIngredients(hits):
    recipeList = []
    if(len(hits)==0):
        print("No Hits")
        return []
    for recipe in hits:
        rList = []
        ingrList = recipe["recipe"]["ingredientLines"]
        for ingr in ingrList:
            print()
    return recipeList
'''
@app.route("/grocery/<zipcode>/<items>")
def locations(zipcode, items):
    return pullLocations(zipcode, items)

@app.route("/language/<raw_data>")
def getSearchphrases(raw_data):
    recipeList = []
    if(len(raw_data)==0):
        print("No Hits")
        return []
    for recipe in raw_data:
        rList = {
            "ingredients": []
        }
        ingrList = recipe["recipe"]["ingredientLines"]
        rList["ingredients"]=ingrList
        sp = entityAnalysis(rList)
        ret = {}
        ret["results"] = sp
        recipeList.append(json.dumps(ret))
    return recipeList

@app.route("/main/<keyword>/<lat>/<lon>")
def main(keyword, lat, lon):
    dat = getRecipe(keyword)
    ingr = getSearchphrases(dat)
    geocoder = Nominatim(user_agent = 'your_app_name')
    geocode = RateLimiter(geocoder.reverse, min_delay_seconds = 1) 
    location = geocode((lat, lon))
    zipcode = location.raw['address']['postcode']
    #print(zipcode)
    res = pullLocations(zipcode, ingr)
    print(res)
    return res

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)