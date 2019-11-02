import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import linear_model
import joblib
dfToyota = pd.read_csv('toyota.csv')
dfDummies = pd.get_dummies(dfToyota[['nama', 'bbm', 'transmisi']])
dfToyota = pd.concat([dfToyota, dfDummies], axis='columns')
dfToyota = dfToyota.drop(['nama', 'bbm', 'transmisi'], axis='columns')
dfToyotaX = dfToyota.drop(['harga'], axis='columns')
dfToyotaY = dfToyota['harga']
x_train, x_test, y_train, y_test = train_test_split(dfToyotaX, dfToyotaY, test_size=.1)
reg = linear_model.LinearRegression()
reg.fit(x_train, y_train)
joblib.dump(reg, 'meomodel')