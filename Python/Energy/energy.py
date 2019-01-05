from app import app, db
from app.models import User, Measurement


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Measurement': Measurement}

# if __name__ == '__main__':
#     # initial create
#     db.create_all()
#     admin = User(username='David Ledvinka', email='david.ledvinka@post.cz')
#     db.session.add(admin)
#     db.session.commit()
#     User.query.all()

#     user1 = User.query.all()[0]
#     meas1 = Measurement()
#     meas1.user = user1
#     meas1.electricityHighRate = 1.0
#     meas1.electricityLowRate = 1.0
#     meas1.gas = 1.0
#     db.session.add(meas1)
#     db.session.commit()
#     print('Done')
#     # app.run(host='localhost', port=5005)
