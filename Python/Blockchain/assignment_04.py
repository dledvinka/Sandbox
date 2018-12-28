def power_of_two(num):
    return num ** 2


def call_me(func, *numbers):
    for num in numbers:
        print('Result: {:-^20.0f}'.format(func(num)))


call_me(power_of_two, 2)
call_me(power_of_two, 3)
call_me(power_of_two, 4)
call_me(lambda num: num ** 2, 5)

print('-' * 30)
call_me(lambda num: num ** 2, 2, 3, 4, 5, )
