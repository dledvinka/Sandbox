persons = [
    {
        'name': 'David',
        'age': 34,
        'hobbies': ['Programming', 'Sports']
    },
    {
        'name': 'Luki',
        'age': 2,
        'hobbies': ['Playing', 'Sleeping']
    },
    {
        'name': 'Eli',
        'age': 6,
        'hobbies': ['Playing', 'Drawing']
    }
]

print('*' * 30)
names = [person['name'] for person in persons]
print(names)

print('*' * 30)
all_older = all([person['age'] > 20 for person in persons])
print(all_older)

print('*' * 30)
persons_copied = [person.copy() for person in persons]
persons_copied[0]['name'] = 'Max'
print(persons)
print(persons_copied)

print('*' * 30)
p1, p2, p3 = persons
print(p1)
print(p2)
print(p3)
