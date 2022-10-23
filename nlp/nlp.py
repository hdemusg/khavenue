from google.cloud import language_v1
import re

def entity_analysis(text):
    client = language_v1.LanguageServiceClient()
    type = language_v1.Document.Type.PLAIN_TEXT
    language = "en"
    document = {"content": text, "type_": type, "language": language}
    encoding_type = language_v1.EncodingType.UTF8
    response = client.analyze_entities(request = {"document": document, "encoding_type": encoding_type})

    foods = []
    confidences = []
    for entity in response.entities:
        t = language_v1.Entity.Type(entity.type_).name
        if t != "NUMBER":
            #print(u'Representative name for the entity: {}'.format(entity.name))
            #print(u'Entity type: {}'.format(t))
            foods.append(entity.name)
            confidences.append(entity.salience)
        #print(u"Salience score: {}".format(entity.salience))

        # Loop over the metadata associated with entity. For many known entities,
        # the metadata is a Wikipedia URL (wikipedia_url) and Knowledge Graph MID (mid).
        # Some entity types may have additional metadata, e.g. ADDRESS entities
        # may have metadata for the address street_name, postal_code, et al.
        '''
        for metadata_name, metadata_value in entity.metadata.items():
            print(u"{}: {}".format(metadata_name, metadata_value))
        '''

        # Loop over the mentions of this entity in the input document.
        # The API currently supports proper noun mentions.
        '''
               for mention in entity.mentions:
            print(u"Mention text: {}".format(mention.text.content))

            # Get the mention type, e.g. PROPER for proper noun
            print(
                u"Mention type: {}".format(language_v1.EntityMention.Type(mention.type_).name)
            )

        '''
    #print(foods, confidences)
    searchphrase = ""
    if len(foods) > 0:
        threshold = 0.75 / len(foods)
        for i in range(len(foods)):
            if confidences[i] >= threshold:
                searchphrase += foods[i]
                searchphrase += ' '

    # Get the language of the text, which will be the same as
    # the language specified in the request or, if not specified,
    # the automatically-detected language.
    
    return searchphrase[:-1]

if __name__ == "__main__":
    with open('ingredients.txt', 'r') as f:
        for line in f.readlines():
            raw = re.sub(r'[0-9/]+', r'', line.strip())
            raw = re.sub(r'\(.*?\)',r'',raw)
            print(entity_analysis(raw))