age = input('What is your age?: ')
data_type = type(age)
print(data_type)

age = int(age)
data_type = type(age)
print(data_type)

print('Your age in dog years is', age * 7)

grocery_list = ['Apples', 'Bananas', 'Oranges', 'Apples']
grocery_list = set(grocery_list)
data_type2 = type(grocery_list)
print(data_type2)
print(grocery_list)

shopping_list = ['VR Headset', 'FBT', 'Rubber Suit', 'Food']
shopping_list = tuple(shopping_list)
data_type3 = type(shopping_list)
print(data_type3)
print(shopping_list)