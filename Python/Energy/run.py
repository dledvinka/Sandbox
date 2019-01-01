from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

from measurements import Measurements
from measurement import Measurement
from command_result import CommandResult

app = Flask(__name__)
CORS(app)
meas = Measurements()

@app.route('/test')
def test():
    response = {
        'message': 'Test message!'
    }
    return jsonify(response), 200

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static', 'index.html')

@app.route('/measurements', methods=['GET'])
def measurements():
    serialized = [m.serialize() for m in meas.get_all()]
    return jsonify(serialized), 200

@app.route('/measurement', methods=['POST'])
def measurement():
    values = request.get_json()
    if not values:
        response = CommandResult(False, 'No data found.')
        return jsonify(response), 400

    required_fields = ['dateTaken', 'electricityHighRate', 'electricityLowRate', 'gas']
    if not all(field in values for field in required_fields):
        response = CommandResult(False, 'Required data is missing.')
        return jsonify(response), 400

    model = Measurement()
    model.dateTaken = values['dateTaken']
    model.electricityHighRate = values['electricityHighRate']
    model.electricityLowRate = values['electricityLowRate']
    model.gas = values['gas']
    cr = meas.insert(model)

    return jsonify(cr.__dict__), 201

if __name__ == '__main__':
    app.run(host='localhost', port=5005)