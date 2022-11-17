fav_food = ['Pizza', 'Tacos', 'Pie', 'Chicken']

for food in fav_food:
    if food == 'Pizza':
        size = input("What size Pizza would you like?: ")
        print(f"You ordered a {size} pizza")

person = {
    'name' : 'Ryan',
    'age': 26,
    'occupation' : 'DevOps Engineer',
    'twitter' : '@randersondev'
}

for value in person:
    print(value)
# Note this setup will only look for the key and print only the key

for key, value in person.items():
    print(f"The key is {key} and the value is {value}")
#This is asking you to locate 2 parameters (key and value) loop through each person ITEM with person.item() and populate each key and value in its respective variable.