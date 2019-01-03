from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

from measurements import Measurements
from measurement import Measurement
from command_result import CommandResult

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///energy.db'
print(app.config['SQLALCHEMY_DATABASE_URI'])
# http://flask-sqlalchemy.pocoo.org/2.3/quickstart/
db = SQLAlchemy(app)
CORS(app)
meas = Measurements()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


class Measurement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    date_taken = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    electricityHighRate = db.Column(db.Float, nullable=False)
    electricityLowRate = db.Column(db.Float, nullable=False)
    gas = db.Column(db.Float, nullable=False)

    # navigation
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(
        'User', backref=db.backref('measurements', lazy=True))


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

    required_fields = ['dateTaken', 'electricityHighRate',
                       'electricityLowRate', 'gas']
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
    # initial create
    db.create_all()
    admin = User(username='David Ledvinka', email='david.ledvinka@post.cz')
    db.session.add(admin)
    db.session.commit()
    User.query.all()

    user1 = User.query.all()[0]
    meas1 = Measurement()
    meas1.user = user1
    meas1.electricityHighRate = 1.0
    meas1.electricityLowRate = 1.0
    meas1.gas = 1.0
    db.session.add(meas1)
    db.session.commit()
    print('Done')
    # app.run(host='localhost', port=5005)
