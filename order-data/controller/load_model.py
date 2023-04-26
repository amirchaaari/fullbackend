import pickle
import json
import datetime as dt
import pandas as pd

# Load the model from the pickle file
with open('/LogisticRegression2.pkl', 'rb') as f:
    model = pickle.load(f)

# Load the JSON data
with open('/your_json_file.json', 'r') as f:
    data = json.load(f)

data=pd.DataFrame(data)    
data['age']=dt.date.today().year-pd.to_datetime(data['dob']).dt.year
data['hour']=pd.to_datetime(data['trans_date_trans_time']).dt.hour
data['day']=pd.to_datetime(data['trans_date_trans_time']).dt.dayofweek
data['month']=pd.to_datetime(data['trans_date_trans_time']).dt.month
encoder = OrdinalEncoder()

# Fit the encoder to your data
encoder.fit(data[['category']])

# Transform your data using the encoder
data['category_encoded'] = encoder.transform(data[['category']])
data=data[['category_encoded','amt','zip','lat','long','city_pop','merch_lat','merch_long','age','hour','day','month']]
#convert category to dummy variables
data=data.values

# Make a prediction using the loaded model
prediction = (model.predict_proba(data)[:,1]*100).astype(int)

# Print the prediction
print(prediction)
