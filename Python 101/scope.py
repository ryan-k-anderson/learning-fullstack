# variables that are inside of a function cannot be accessed outside of a function

def myfunc():
    name = 'Ryan'
    return name

myfunc()
print(name)
# will not return and throw error for the 'name' variable is scoped to inside of the function

name = 'Ryan'
def somefunc():
    return name

print(somefunc())