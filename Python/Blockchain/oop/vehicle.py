class Vehicle:
    def __init__(self, starting_top_speed=100):
        self.top_speed = starting_top_speed
        self.__warnings = []

    def __repr__(self):
        return 'Top Speed: {}, Warnings: {}'.format(self.top_speed, len(self.__warnings))

    def add_warning(self, warning_text):
        if len(warning_text) > 0:
            self.__warnings.append(warning_text)

    def get_warnings(self):
        return self.__warnings

    def drive(self):
        print('I am driving... my top speed is {}'.format(self.top_speed))
