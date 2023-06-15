import json
import re

rpms = []
line = input()
while line != 'FATAL: stdin closed':
    data = re.search('(?P<count>[0-9]+) cnt[\t](?P<rpm>[0-9]+) rpm', line)
    if data:
        #print(data.groupdict())
        rpms.append(data.groupdict()['rpm'])
    line = input()

x = list(range(len(rpms)))

