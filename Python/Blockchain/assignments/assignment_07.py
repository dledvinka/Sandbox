class Food:
    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

    def __repr__(self):
        return self.describe()
    
    def describe(self):
        return 'Name: {}, Kind: {}'.format(self.name, self.kind)

f1 = Food('Spagetti', 'Pasta')
print(f1.describe())
print(f1.__dict__)
print(f1)