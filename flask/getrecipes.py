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
    json_data = data.decode('utf-8')
    raw_data = json.loads(json_data)
    dat = raw_data['hits']
    return(dat)
