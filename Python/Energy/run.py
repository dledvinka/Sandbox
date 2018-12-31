from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

from measurements import Maesurements

app = Flask(__name__)
CORS(app)
meas = Maesurements()

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
    return jsonify([m.__dict__ for m in meas.get_all()]), 200

if __name__ == '__main__':
    app.run(host='localhost', port=5005)