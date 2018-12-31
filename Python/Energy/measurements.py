from measurement import Measurement
import datetime

class Maesurements:
    
    def get_all(self):
        return [
            Measurement(datetime.datetime.now(), 1.0),
            Measurement(datetime.datetime.now(), 2.0),
            Measurement(datetime.datetime.now(), 3.0)
        ]