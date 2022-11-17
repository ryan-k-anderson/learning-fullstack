//JavaScript 201 Notes
//STYLING CODE

let varName = "Thing";
//CamelCasing first word is lowercase and all proceeding words the first letter is capitalized 
const NAME = "Ryan";
console.log(NAME);
console.log(varName)
//All uppercase we know that this is a constant variable
//CamelCasing we can identify that it is a dynamic variable

// if(something =='something'){
//     //our code in here
// } else {
//     //something else in here
// }

function theNameOfFunction(param1, param2){
    //our code in here
    //return something
}
//make sure code is readable and include notes that help keep you and other team members in the loop of whats going on in your code



//WAITING FOR THE PAGE TO LOAD

//Ensure the script tag is at the bottom of the body
//Code renders top to bottom 
window.onLoad = function(){
    alert('Page is loaded')
    //this code should be in the HTML document
}



//WHEN THE PAGE IS REFRESHED
window.onbeforeunload = function(){
    console.log("Before Unload")
    return "Are you sure you want to leave?"
    //This shoud be written in the HTML document
    // Comes in handy with a video player when someone refreshes and comes back it saves their progress. Acts as a buffer for something like an Ajax call to server.
}



//STRICT COMPARISONS

let num = '0';
console.log(num == '0')
//comparing string to string will return true
console.log(num == 0)
//comparing num 0f '0' to the value of 0 which will return true
console.log(num === 0)
//strict comparing num which is 0 with a string data type and 0 which is a number data type. Will return false
//Faster processing time



//JAVASCRIPT VARIABLE SCOPING

//Where variables are allowed to live
function something(){
    let varName = 'Thing'
    const varName2 = ' Other Thing'
    //these cannot be grabbed outside of this function. Its is strictly scoped to this function
}
const num1 = 1234;
if(num1 === 1234){
    var greeting = 'Hello 1234'
}
console.log(greeting)



//JAVASCRIPT VARIABLE HOISTING
console.log('First',name2)
var name2 = 'Ryan Anderson'
console.log('Second', name2)

// This is actually doing this
// var name2;
// console.log('First',name2)
// var name2 = 'Ryan Anderson'
// console.log('Second', name2)



//JAVASCRIPT CLOSURES

let person1 = "Ryan K Anderson"
function greeting(){
    console.log(`Hello ${person1}`)
    // var person2 = 'Jon'
}
// greeting();
// console.log(person2, "Is the second person") //Will not work
//functions can inherit variables from outside of itself
//cannot call variables that reside inside a function



//CALLBACK FUNCTIONS
console.log ('Waiting 2.5 seconds')
setTimeout(function(){
    console.log('Do this thing in here')
}, 2500)



//STRICT MODE

x = "thing" //wil not work
function strict(){
    "use strict";
    x = 'thing'
    return x
}
console.log(strict())
//need to declare 'let', 'const', 'var' for it to be properly declared
//'use strict;' prevents typos when declaring variables



//TIMED EVENTS WITH TIMEOUTS AND INTERVALS

console.log('Starting Script')
setTimeout(function(){
    console.log("Waited 3 seconds")
}, 3000)



let count = 0;
const myInterval = setInterval(function(){
    console.log("Checking something...")
    count++;

    if(count === 3){
        clearInterval(myInterval);
        console.log('That was the last one')
    }
}, 2000);
//This sets a callback of checking something ever 2 seconds
//Iterates through it 3 times



// WHILE LOOPS

let data = 0;
while(data <=100){
    //Execute this code
    console.log(data);
    data++;
};

while(true){
    let name = prompt("What is your name?");
    if(name === "Ryan"){
        break;
    };
    console.log("Wrong Name. Try Again")
};



//DATE FORMATTING
//Local to computer's time

let d = new Date(2025, 1, 15);
console.log(d);



//DESTRUCTURING ARRAYS AND OBJECTS

//Destructuring an array
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const [jan, feb ] = months;
console.log(jan, feb);

//Destructuring an object
const person3 = {
    'name': 'Ryan',
    'twitter': '@randersondev',
    'hobby': 'furry'
};

const {name, twitter} = person3;

const name1 = person3['name'];
const twitter1 = person3['twitter'];
console.log(name, twitter);
console.log(name1, twitter1);



//DELETELING OBJECT PROPERTIES

const person4 = {
    'name': 'Logan',
    'age': 28
};
delete person4['age'];
console.log(person4['age']);
//cannot delete an entire object
//use strict can be used to find hidden errors

//PROPER JAVASCRIPT MATH

Math.round(4.6);
//Rounds to 5
Math.round(4.4);
//Rounds to 4
Math.pow(8,2);//This is for exponents
//Result of 64
8**2 //more modern way to do exponents
//Result of 64
Math.sqrt(9);
//result
Math.max(1, 4, 16, 56);
//56
Math.min(-30, -20, -10, 40);
//-30
Math.floor(23.9);
//no matter the decimal just take the current whole number
//23
Math.ceil(38.1);
//Rounds to the next whole number value
//39



//GENERATING RANDOM NUMBERS IN JAVASCRIPT\

let number = Math.random() * 100
//gives a randowm number between 0 and 1
console.log(number)

function randomNumber(){
    const someNum = Math.random() * 10
    const newNum = Math.round(someNum)
    return newNum
}
console.log(randomNumber());




//GRACEFULLY HADLING ERRORS TRY/CATCH/FINALLY

try{
    functionThatDoesntExist()
    //can use 'throw' to throw a custom error
} catch(error){
    console.warn(error)
} finally {
    // Do something here
    //Regardless it will keep running your code past the catch
}



//"THIS" KEYYWORD

const person5 = {
    'name': 'Jason',
    speak(name){
        console.log(`My name is ${this.name}`);
    }
}
//'this' refers to the current object that it is scoped to
person5.speak();

function counter() {
    if (this.total === undefined){
        this.total = 1
    } else {
        this.total++
    }
    console.log("Running counter. Total is", this.total)
}
counter()
counter()
counter()
counter()
counter()
counter()



//ARROW FUNCTIONS

// const hello = function(){
//     return "Hello Ryan"
// }
// const greeting = hello()
// console.log(greeting)



// const hello = () =>{
//     console.log("Hellowwwwwww")
// }
// hello()



const hello = () => "Hello from 1 line function"
console.log(hello())

const myNewGreeting = (name) =>{
    console.log(`Welcome ${name}`)
}
myNewGreeting("Coding for everyone.com students")

//3 ways to write a function

// function myName(name){
//     return...
// }

// const myFunction = function(name){
//     return...
// }

// const simplified = (name) =>{
//     return...
// }



//JAVASCRIPT CLASSES

class MyClassName {
    setName(name){
        this.name =name
    }
    speak(){
        if(this.name === undefined){
            this.name = 'Unnamed Furry'
        }
        console.log(`Arf Arf says ${this.name} `)
    }
}
const thing = new MyClassName()
thing.setName()
thing.speak()



//JAVASCRIPT CLASS CONSTRUCTOR METHOD

class Person {
    constructor(name){
        this.name =name
    }

    greeting(){
        console.log(`Hello from ${this.name}`)
    }
}
const ryan = new Person("Jacob")
ryan.greeting()



//JASON
// JSON = JavaScript Object Notation

const object = {
    'name': 'Ryan',
    'favFoods': ['Pizza', 'Tacos', 'Chicken Wings'],
    'age': 31,
    'friends': [
        {
            'name': 'Foresta',
            'age':28,
            'occupation':'Prince of Whore House',
        },
        {
            'name': 'Suka',
            'age': 26,
            'occupation': 'nurse'
        }
    ]
}

//JASOn is just the following:
// {
//     'name': 'Ryan',
//     'favFoods': ['Pizza', 'Tacos', 'Chicken Wings'],
//     'age': 31,
//     'friends': [
//         {
//             'name': 'Foresta',
//             'age':28,
//             'occupation':'Prince of Whore House',
//         },
//         {
//             'name': 'Suka',
//             'age': 26,
//             'occupation': 'nurse'
//         }
//     ]
// }

//JSON is just base JS that is globally recognized by other programming languages
//JSON is just a JS object without a variable name



//WHAT IS AJAX

// AJAX = Asyncronous JavaScript and XML
//Not a programming language

//XMLHttpRequest
//Whenever tweet, like, fetches new content, reloads page, etc that is AJAX request
//It's super lightweight
//Sends and recieve tiny bit of data
//www.facebook.com -> JSON Data

//XMLHttpRequest ---- fetch()



//THE FETCH API

//SYNTAX
// fetch('https://www.cynderchimes.com/')
//     .then(...)
//     .then(...)

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })