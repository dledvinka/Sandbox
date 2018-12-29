# f = open('demo.txt', mode='w')
# for i in range(5):
#     f.write('{:2} Hello from Python!\n'.format(i))
# f.close()

# f = open('demo.txt', mode='r')
# # file_content = f.readlines()
# # f.close()

# # for line in file_content:
# #     print(line[:-1])

# # print(file_content)

# line = f.readline()

# while line:
#     print(line[:-1])
#     line = f.readline()
# f.close()

# print('Closing...')


with open('demo.txt', mode='r') as f:
    line = f.readline()

    while line:
        print(line[:-1])
        line = f.readline()

print(f.closed)
print('Closing...')
