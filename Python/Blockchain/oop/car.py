from vehicle import Vehicle


class Car(Vehicle):
    def brag(self):
        print('Look how cool my car is!')


car1 = Car()
car2 = Car(200)
car3 = Car(250)

car1.drive()
car1.brag()
# car1.__warnings.append('New warning')
car1.add_warning('New warning')
print(car1)
# Car.top_speed = 200
car2.drive()
print(car2.get_warnings())
car3.drive()
print(car3.get_warnings())
