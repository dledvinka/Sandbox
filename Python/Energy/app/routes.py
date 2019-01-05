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
    all_measurements = Measurement.query.order_by(Measurement.date_taken.desc()).all()
    result = measurements_schema.dump(all_measurements)

    return jsonify(result.data), 200


@app.route('/users', methods=['GET'])
def users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)

    return jsonify(result.data), 200

@app.route('/measurement/<id>', methods=['GET'])
def get_measurement(id):
  model = Measurement.query.get(id)
  return measurement_schema.jsonify(model), 200


@app.route('/measurement/<id>', methods=['DELETE'])
def delete_measurement(id):
  model = Measurement.query.get(id)
  db.session.delete(model)
  db.session.commit()
  return measurement_schema.jsonify(model), 200

@app.route('/measurement/<id>', methods=['PATCH'])
def patch_measurement(id):
  model = Measurement.query.get(id)
  values = request.get_json()

  format_str = '%Y-%m-%d' # The format
  datetime_obj = datetime.strptime(values['date_taken'], format_str)
  values['date_taken'] = datetime_obj.date()

  measurement_schema = MeasurementSchema(exclude=['id'])
  posted_model = measurement_schema.load(values)

  for key, value in posted_model.data.items():
    setattr(model, key, value)

  # model.date_taken = posted_model.date_taken
  # model.electricity_high_rate_kwh = posted_model.electricity_high_rate_kwh
  # model.electricity_low_rate_kwh = posted_model.electricity_low_rate_kwh
  # model.gas_m3 = posted_model.gas_m3
  db.session.commit()

  return measurement_schema.jsonify(model), 200


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

    format_str = '%Y-%m-%d' # The format
    datetime_obj = datetime.strptime(values['date_taken'], format_str)
    values['date_taken'] = datetime_obj.date()
    
    measurement_schema = MeasurementSchema(only=('date_taken', 'electricity_high_rate_kwh',
                                           'electricity_low_rate_kwh', 'gas_m3'))
    posted_model = measurement_schema.load(values)  
    model = Measurement(**posted_model.data, user_id = User.query.get(1).id)

    db.session.add(model)
    db.session.commit()

    created = MeasurementSchema().dump(model).data

    return measurement_schema.jsonify(created), 201
