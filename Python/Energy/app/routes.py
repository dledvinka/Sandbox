from flask import jsonify, request, send_from_directory
from datetime import datetime

from app import app, db
from app.schemas import MeasurementSchema, UserSchema
from app.models import Measurement, User
from app.command_result import CommandResult

measurement_schema = MeasurementSchema()
measurements_schema = MeasurementSchema(many=True)
users_schema = UserSchema(many=True)


@app.route('/')
@app.route('/index')
def index():
    return send_from_directory('static', 'index.html')


@app.route('/test')
def test():
    response = {
        'message': 'Test message!'
    }
    return jsonify(response), 200


# https://medium.com/python-pandemonium/build-simple-restful-api-with-python-and-flask-part-2-724ebf04d12
@app.route('/measurements', methods=['GET'])
def measurements():
    all_measurements = Measurement.query.all()
    result = measurements_schema.dump(all_measurements)

    return jsonify(result.data), 200


@app.route('/users', methods=['GET'])
def users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)

    return jsonify(result.data), 200


@app.route('/measurement', methods=['POST'])
def measurement():
    values = request.get_json()
    if not values:
        response = CommandResult(False, 'No data found.')
        return jsonify(response), 400

    required_fields = ['date_taken', 'electricity_high_rate_kwh',
                       'electricity_low_rate_kwh', 'gas_m3']
    if not all(field in values for field in required_fields):
        response = CommandResult(False, 'Required data is missing.')
        return jsonify(response), 400

    model = Measurement()
    # values['date_taken'] // TODO czdaled convert string to time
    model.date_taken = datetime.utcnow()
    model.electricity_high_rate_kwh = values['electricity_high_rate_kwh']
    model.electricity_low_rate_kwh = values['electricity_low_rate_kwh']
    model.gas_m3 = values['gas_m3']
    model.user_id = User.query.get(1).id

    db.session.add(model)
    db.session.commit()

    return measurement_schema.jsonify(model), 201
