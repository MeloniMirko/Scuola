num=[1,2]
print(num[0])
for i in range(2,100):
    num.append(num[i-1]+ num[i-2])
    print(num[i])