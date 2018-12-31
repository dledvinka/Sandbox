from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/test')
def test():
    response = {
        'message': 'Test message!'
    }
    return jsonify(response), 200

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(host='localhost', port=5005)