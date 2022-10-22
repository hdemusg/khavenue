import http.client
import json
conn = http.client.HTTPSConnection("edamam-recipe-search.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "06009ea3fdmshd55b73a266b1d30p13044ajsn1654bf699e83",
    'X-RapidAPI-Host': "edamam-recipe-search.p.rapidapi.com"
    }
def getRecipe(search):
    query = "/search?q=" + search
    query = query.replace(" ", "%20")
    conn.request("GET", query, headers=headers)
    res = conn.getresponse()
    data = res.read()
    json_data = data.decode("utf-8")
    raw_data = json.loads(json_data)
    return(raw_data["hits"])

'''
foods = ["pizza", "pasta", "salad", "fried rice", "sandwich", "burrito", "taco", "enchilada", "noodle", "sausage", "hot dog", "paneer", "indian", "pad thai", "tikka masala", 
"filipino", "soup", "cake", "pudding", "pie", "pretzel", "burger", "pancake", "waffle", "sub", "panini", "risotto", "polenta", "paella", "cookie", "green curry", "red curry"
, "guacamole", "salsa", "queso", "chicken", "turkey", "stuffing", "corn bread", "falafel", "hummus", "kabob", "trinidadian", "afghan", "nachos", "ice cream", "filet mignon", 
"lasagna", "dumplings", "chorizo", "barbecue", "macaroni", "fried chicken", "jerk", "biscuit", "tofu", "baklava", "samosa", "couscous", "quinoa", "yogurt", "stuffed pepper", "egg"]

with open("ingredients.txt", "w") as f:
    for dish in foods:
        raw_data = getRecipe(dish)
        for recipe in raw_data:
            ingrList = recipe["recipe"]["ingredientLines"]
            for ingr in ingrList:
                f.write(ingr + "\n") 
'''


#getRecipe("pasta")
