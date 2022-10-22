from flask import Flask, render_template
from getrecipes import *
app = Flask(__name__)

@app.route("/recipes")
def recipes(keyword):
    return getRecipe(keyword)

if __name__ == "__main__":
    app.run(debug=True)