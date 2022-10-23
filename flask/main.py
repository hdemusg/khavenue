from curses import raw
from flask import Flask, render_template, request
from getrecipes import getRecipe
import requests
import json
from pull_locations import pullLocations 
from language import entityAnalysis
from uszipcode import Zipcode, SearchEngine


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

@app.route("/language", methods=["POST"])
def getSearchphrases(raw_data):
    j = request.get_json()
    print(j)
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

@app.route("/main/<keyword>/<lat>/<lon>", methods = ["POST"])
def main(keyword, lat, lon):
    dat = getRecipe(keyword)
    ingr = getSearchphrases(dat)
    search = SearchEngine()
    zipcode = search.by_coordinates(lat, lon, 1)[0]
    return pullLocations(zipcode, ingr)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)