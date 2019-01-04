from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from datetime import datetime

from config import Config
# from measurements import Measurements
# from measurement import Measurement
# from command_result import CommandResult

# https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database
# http://flask-sqlalchemy.pocoo.org/2.3/quickstart/

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)
ma = Marshmallow(app)
# meas = Measurements()

from app import routes, models, schemas