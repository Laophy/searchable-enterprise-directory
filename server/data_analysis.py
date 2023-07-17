#!/usr/bin/env python
# coding: utf-8

# In[77]:

# importing sklearn imports 
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.metrics import mean_squared_error
import pickle
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# reading the data 
data = pd.read_csv("C:\Workspace\searchable-enterprise-directory\server\enterprise_directory.csv")

# setting X and y to the ind and dep variables
X = data[['job_role','work_location']]
y = data['salary']

# converting categorical to numerical
#X_encode = pd.get_dummies(X)
column_transformer = ColumnTransformer([('encoder', OneHotEncoder(), [0, 1])], remainder='passthrough')
X_encode = column_transformer.fit_transform(X)

# splitting the data intro train and test
X_train, X_test, y_train, y_test = train_test_split(X_encode, y, test_size=0.2,random_state=42)

# creating the model and training
model = LinearRegression()
model.fit(X_train, y_train)

# make the prediction
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test,y_pred)

print('Mean Squared Error:',round(mse,2))

# dumping it to a pickle 
with open('trained_model.pkl','wb') as file:
    pickle.dump(model,file)

with open('trained_model.pkl','rb') as file:
    pickle.load(file)








