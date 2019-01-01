import datetime

class Measurement:    
    def __init__(self):
        self.id = 0
        self.created = None
        self.dateTaken = None
        self.electricityHighRate = None
        self.electricityLowRate = None
        self.gas = None

    def serialize(self):
        dict_copy = self.__dict__.copy()
        dict_copy['created'] = dict_copy['created'].isoformat()
        # dict_copy['dateTaken'] = dict_copy['dateTaken'].isoformat()
        return dict_copy

    @staticmethod
    def deserialize(dict):
        meas = Measurement()
        meas.id = dict['id']
        meas.created = datetime.datetime.fromisoformat(dict['created'])
        meas.dateTaken = dict['dateTaken']
        meas.electricityHighRate = dict['electricityHighRate']
        meas.electricityLowRate = dict['electricityLowRate']
        meas.gas = dict['gas']
        return meas
        