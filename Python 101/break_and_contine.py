items = [1, 2, 3, 4, 5]

for item in items:
    if item == 2 or item == 4:
        continue
    print(item)

for item in items:
    if item == 3:
        break
    print(item)

num = [1,17,22,14,246,312,55]
even_arr = []
for number in num:
    if number%2 == 0:
        even_arr.append(number)
    else:
        continue

print(even_arr)