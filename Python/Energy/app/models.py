from app import db
from datetime import datetime


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    measurements = db.relationship(
        'Measurement', backref='user', lazy='dynamic')

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Measurement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    date_taken = db.Column(db.DateTime, nullable=False,
                           index=True, default=datetime.utcnow)
    electricity_high_rate_kwh = db.Column(db.Float, nullable=False)
    electricity_low_rate_kwh = db.Column(db.Float, nullable=False)
    gas_m3 = db.Column(db.Float, nullable=False)

    # navigation
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return '<Measurement {}, EHR_kwh: {}, ELR_kwh: {}, GAS_m3 {}>'.format(self.date_taken, self.electricity_high_rate_kwh, self.electricity_low_rate_kwh, self.gas_m3)

