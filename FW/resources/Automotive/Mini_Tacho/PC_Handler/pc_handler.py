import json
import re
from matplotlib import pyplot as plt

rpms = []
line = input()
while line != 'FATAL: stdin closed':
    data = re.search('(?P<count>[0-9]+) cnt[\t](?P<rpm>[0-9]+) rpm', line)
    if data:
        #print(data.groupdict())
        rpms.append(int(data.groupdict()['rpm']))
    line = input()

rpmsFixed = []

mask = 100

for i in range(mask, len(rpms) - mask):
    sum = 0
    for data in rpms[i - mask:i + mask]:
        sum += data
    rpmsFixed.append(sum / ((mask * 2) + 1))

speed = []

for rpm in rpmsFixed:
    speed.append((130 * rpm) / 5000)

#plt.plot(rpmsFixed)
plt.plot(speed)
plt.savefig('speed.png')
