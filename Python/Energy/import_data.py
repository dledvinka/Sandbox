import pandas as pd

# dt = pd.read_csv('energy.csv', parse_dates=[0])
dt = pd.read_csv('energy.csv', sep=';', parse_dates=['Date'])
dt.index = dt.pop('Date')
print(dt.head())
gas_mean = dt.P.resample('M', fillna='time').agg(['sum', 'mean', 'max'])
print(gas_mean.head(50))