import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sb
from sklearn.model_selection import train_test_split
from sklearn import linear_model

# =====================================================================
# read csv file
dfToyota = pd.read_csv('toyota.csv')
dfDummies = pd.get_dummies(dfToyota[['nama', 'bbm', 'transmisi']])
# print(dfDummies)

# =====================================================================
# create dummy variables
dfToyota = pd.concat([dfToyota, dfDummies], axis='columns')
dfToyota = dfToyota.drop(['nama', 'bbm', 'transmisi'], axis='columns')
dfToyotaX = dfToyota.drop(['harga'], axis='columns')
dfToyotaY = dfToyota['harga']
# print(dfToyotaX.columns.values)
# print(dfToyotaY)

# =====================================================================
# plot correlation heatmap
# sb.heatmap(dfToyota.corr(), annot=True)
# plt.show()

# =====================================================================
# train test split | test = 10% & training = 90%
x_train, x_test, y_train, y_test = train_test_split(dfToyotaX, dfToyotaY, test_size=.1)
print(x_train.columns.values)
# ['km' 'tahun' 'nama_Alphard' 'nama_Avanza' 'nama_Calya'
#  'nama_Kijang Innova' 'nama_Sienta' 'nama_Vellfire' 'nama_Veloz'
#  'nama_Venturer' 'nama_Voxy' 'bbm_bensin' 'bbm_diesel' 'transmisi_manual'
#  'transmisi_otomatis']


# =====================================================================
# multivariate linear regression
reg = linear_model.LinearRegression()
reg.fit(x_train, y_train)

# nilai gradien m
print(reg.coef_)

# nilai intercept b
print(reg.intercept_)

# score
print(reg.score(x_test, y_test) * 100)

# prediksi
kmth = [5,2015]
mobil = [1,0,0,0,0,0,0,0,0]
bbm = [1,0]
transmisi = [0,1]

data = np.array(kmth + mobil + bbm + transmisi)
print(reg.predict([data]))