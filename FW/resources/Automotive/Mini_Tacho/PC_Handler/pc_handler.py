import json
import re
from matplotlib import pyplot as plt
from statistics import mean
from datetime import datetime

line = ""

while line != 'FATAL: stdin closed':
    cnt = 0
    rpms = []
    while cnt < 10000 and line != 'FATAL: stdin closed':
        data = re.search('(?P<count>[0-9]+) cnt[\t](?P<rpm>[0-9]+) rpm', line)
        if data:
            #print(data.groupdict())
            rpms.append(int(data.groupdict()['rpm']))
        line = input()
        cnt += 1

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


    data = {}
    data["max_speed"] = max(speed)
    data["time"] = 1000
    data["avg_speed"] = mean(speed)
    data["distace"] = data["avg_speed"] * (1000 / 60)
    data["speed"] = speed

    with open("data.json", "w") as file:
        file.write(json.dumps(data))

    
