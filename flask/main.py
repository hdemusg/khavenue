from flask import Flask, render_template, request
from getrecipes import getRecipe
import requests
import json
from pull_locations import pullLocations 
from language import entityAnalysis

app = Flask(__name__)

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/recipes/<keyword>")
def recipes(keyword):
    return getRecipe(keyword)

@app.route("/grocery/<zipcode>/<items>")
def locations(zipcode, items):
    return pullLocations(zipcode, items)

@app.route("/language", methods=["POST"])
def getSearchphrases():
    j = request.get_json()
    print(j)
    sp = entityAnalysis(j['ingredients'])
    print(type(sp))
    ret = {}
    ret["results"] = sp
    return json.dumps(ret)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)