import sys
import json
import pickle
import pandas as pd

with open('trained_model.pkl','rb') as file:
    model = pickle.load(file)

# # testing getting an input 
json_data = sys.stdin.read()
data = json.loads(json_data)
job_role = data['jobRole']
job_location = data['workLocation']


#print(data[0])

data = {'job_role': [job_role, 'A','B','C','D','E','F'], 'work_location': [job_location,'A','B','C','D','E','F']}
user_data = pd.DataFrame(data)
user_encoded = pd.get_dummies(user_data)
#salary = model.predict(user_encoded)
predict = model.predict(user_encoded)
print(round(predict[0],2))