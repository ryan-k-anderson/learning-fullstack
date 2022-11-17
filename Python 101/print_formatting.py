name = 'Ryan'

welcome_message = "Hello {} welcome to Python 101".format(name)
print(welcome_message)
#.format() looks for the curly braces and formats with the parameter given () i.e. .format(name), NAME was placed where the curly braces were in the string.

other_message = f"Hello {name} welcome to the gulag"
print(other_message)
#The 'f' goes BEFORE the string declaration to create an f string that will take the variable {name} as a dynamic input into the string. 