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
    return getRecipe(keyword)[:5]
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
    ingr = getIngredients(dat)
    geocoder = Nominatim(user_agent = 'your_app_name')
    geocode = RateLimiter(geocoder.reverse, min_delay_seconds = 1) 
    location = geocode((lat, lon))
    zipcode = location.raw["address"]["postcode"]
    #print(zipcode)
    res = pullLocations(zipcode, ingr)
    print(res)
    return res

@app.route("/ingredients/<raw_data>")
def getIngredients(raw_data):
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
        recipeList.append(json.dumps(rList))
    return recipeList

@app.route("/nutrition/<raw_data>")
def getNutrition(raw_data):
    nutritionList = []
    if(len(raw_data)==0):
        print("No Hits")
        return []
    for recipe in raw_data:
        rList = {
            "Calories": [],
            "Fat": [],
            "Trans Fat": [],
            "Carbs": [],
            "Sugar": [],
            "Protein": [],
            "Sodium": []
        }
        rList["Calories"]=str(recipe["recipe"]["totalNutrients"]["ENERC_KCAL"]["quantity"]) + "kcal"
        rList["Fat"]= str(recipe["recipe"]["totalNutrients"]["FAT"]["quantity"]) + "g"
        rList["Trans Fat"]= str(recipe["recipe"]["totalNutrients"]["FATRN"]["quantity"]) + "g"
        rList["Carbs"]= str(recipe["recipe"]["totalNutrients"]["CHOCDF"]["quantity"]) + "g"
        rList["Sugar"]= str(recipe["recipe"]["totalNutrients"]["SUGAR"]["quantity"]) + "g"
        rList["Protein"]= str(recipe["recipe"]["totalNutrients"]["PROCNT"]["quantity"]) + "g"
        rList["Sodium"]= str(recipe["recipe"]["totalNutrients"]["NA"]["quantity"]) + "mg"
        nutritionList.append(json.dumps(rList))
    return nutritionList

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)