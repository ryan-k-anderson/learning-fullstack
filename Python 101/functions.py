
def somename(name = None , food= 'Pizza'):
    if name == None:
        name = 'David'

    person_type = "dog"
    if name == 'David':
        person_type = 'Human'

    print(person_type)

    print(f"Hello {name}. Lets eat some {food}")

some_var = somename()
somename()

print("The variable is", some_var)
#When storing a function in a varibale and trying to call that variable if the function doesnt have a difinitive return, it will default return none line 14 and line 17

def somefunction():
    return "A value"

thing = somefunction()
print(thing)
#When string a fucnction in a variable the function has to return some kind of value or it's default will return NONE