import random
from datetime import datetime

random.seed(datetime.now())
rnum1 = random.random()
rnum2 = random.uniform(1.0, 10.0)

print(rnum1)
print(rnum2)
