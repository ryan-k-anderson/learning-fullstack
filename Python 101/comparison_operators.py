# if something  == something else:
#     do a thing
# else:
# do another thing 

# can_code = False

# if can_code == True:
#     print('You can code')
# else:
#     print('Sorry you cannot code')

name = input('Name:')
if name.lower()  == 'ryan anderson':
    print('Show student portal')
    bring_food = 'Pizza'
elif name.lower() == 'barney':
    print(f'You are banned {name}')
    bring_food = 'Nothing'
else:
    print('Invalid Credentials')
    bring_food = 'Salmon'

    print(f"You are eating {bring_food}")