import numpy as np
import pandas as pd


text_file = open('ingredients.txt','r')
data = []
for line in text_file.readlines():
    data.append(line.strip())
text_file.close()
print(len(data))
data = np.array(data)
df = pd.DataFrame (data, columns = ['ingredient'])
train, validate, test = np.split(df.sample(frac=1), [int(.6*len(df)), int(.8*len(df))])
train = train.values.tolist()
validate = validate.values.tolist()
test = test.values.tolist()
# print(len(train.values.tolist()))
# print(len(test.values.tolist()))
# print(len(validate.values.tolist()))
with open('ingredients_train.txt', 'w') as f:
    for line in train:
        f.write(line[0] + "\n")
with open('ingredients_validate.txt', 'w') as f:
    for line in validate:
        f.write(line[0] + "\n")
with open('ingredients_test.txt', 'w') as f:
    for line in test:
        f.write(line[0] + "\n")


