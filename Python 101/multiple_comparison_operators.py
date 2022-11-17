age = 26
name = 'Brandon'

if age >= 18:
    if name == 'Ryan':
        print('I can drink alcohol')

# Short way to write same script
if age >= 18 and name == 'Ryan':
    # Using AND both sides of the AND have to be true. If just 1 is FALSE the whole thing is FALSE
    print(f"{name} can drink alcohol, because he is {age} years old")
else:
    print("Don't do anything")

if age >= 18 or name == 'Ryan':
    # Using OR just 1 side of the OR statement has to be true for the whole thing to be TRUE
    print(f"{name} can drink alcohol, because he is {age} years old")
else:
    print("Don't do anything")