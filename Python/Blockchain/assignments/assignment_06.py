import json
import pickle

# 1) Write a short Python script which queries the user for 
# input (infinite loop with exit possibility) and writes the 
# input to a file.
user_data = []

def write_to_file():
    with open('assignment_06.json', mode='a') as f:
        json.dump(user_data, f)

    with open('assignment_06.dat', mode='ab') as f:
        pickle.dump(user_data, f)

        
def print_file_content():
    with open('assignment_06.txt', mode='r') as f:
        print(f.read())
    
    print('JSON')
    with open('assignment_06.json', mode='r') as f:
        print(json.loads(f.read()))

    print('PICKLE')
    with open('assignment_06.dat', mode='rb') as f:
        print(pickle.loads(f.read()))

print('Hello user!')

exit_requested = False
while not exit_requested:
    print('What do you want to do?\n')
    print('1. Enter data')
    print('2. Write to file')
    print('3. See file content')
    print('q. Exit')
    user_choice = input('Choice:')
    if (user_choice == 'q'):
        exit_requested = True
        print('Exiting...')
    elif (user_choice == '1'):
        data = input('Enter data: ')
        user_data.append(data)
    elif (user_choice == '2'):
        write_to_file()
        user_data = []
    elif (user_choice == '3'):
        print_file_content()
    else:
        print('Invalid choice!')



# 2) Add another option to your user interface: The user should be 
# to output the data stored in the file in the terminal.
# 3) Store user input in a list (instead of directly adding it to 
# the file) and write that list to the file – both with pickle 
# and json.
# 4) Adjust the logic to load the file content to work 
# with pickled/ json data.