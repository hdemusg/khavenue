from flask import Flask, render_template, request
from getrecipes import getRecipe
import requests
import json
from pull_locations import pullLocations 

app = Flask(__name__)

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/recipes/<keyword>")
def recipes(keyword):
    return getRecipe(keyword)

@app.route("/grocery/<zipcode>")
def locations(zipcode):
    return pullLocations(zipcode)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)