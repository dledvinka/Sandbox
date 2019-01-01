from measurement import Measurement
import datetime
import json
import uuid

from command_result import CommandResult

class Measurements:
    
    def __init__(self):
        try:
            with open('data.json', mode='r') as f:
                serialized = json.loads(f.read())
                self.measurements = []
                for meas_dict in serialized:
                    meas = Measurement.deserialize(meas_dict)
                    self.measurements.append(meas)
        except (IOError, IndexError, ValueError):
            self.measurements = []

    def get_all(self):
        return self.measurements
    
    def insert(self, model) :
        model.id = str(uuid.uuid4())
        model.created = datetime.datetime.utcnow()
        self.measurements.append(model)

        with open('data.json', mode='w') as f:
            serialized = [meas.serialize() for meas in self.measurements]
            f.write(json.dumps(serialized))

        return CommandResult(True, None)
        
