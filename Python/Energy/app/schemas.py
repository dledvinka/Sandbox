from app import ma

class MeasurementSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ['id', 'date_taken', 'electricity_high_rate_kwh', 'electricity_low_rate_kwh', 'gas_m3']

class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ['username', 'email']