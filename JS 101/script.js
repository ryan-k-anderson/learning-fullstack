console.log("Page successfully loaded script.js")
// Validate that the pathing is correct in the HTML document as well as the spelling of the document

var website = "https://www.cynderchimes.com";
var teacherName = "Ryan Anderson";
// var (variable) is used to assign variables. followed by the variable  name
// = is the assignment operator. It sets the value to variable. Not to be confused with ==
// Naming variables is always lowercase first letter of first word and uppercase first letter of all proceeding words after.
//*NOTE* if you capitalize the first letter of a naming convention program will think it is a class and not a name

console.log(teacherName);

if(teacherName == 'Ryan Anderson'){

let apples = 5;
// Works like var and it is a variable type that can be reassigned
const height = "6' 0\"";
// If you need something that is JS syntax to be included in a string put a '\' in front of it so it will be included
// const is a variable type that cannot be reassigned. Hence the name const (constant)
console.log('I have', apples, "apples");
console.log('I am', height);
//console.log has to be within the if statement for it to read because let and const are in the scope of the if statement
}
const name = 'Ryan Anderson'
let profession = 'Programmer'

// Operators{
//     = assignment
//     + addition
//     - subtraction
//     / division
//     * multiplication
//     ** exponents
//     % modulo (this does division and gives you a remainder amount)
//     ++ increment by 1
//     -- decrement by 1
//     != Not equal
//     >= Greater than or equal
//     <= Less than or equal
//     == comparison
// }

//Data Types
const str = 'a String'; //string
const num = 3; //number
const flt = 3.14; //Float
const bool = true; // or false
const list = ["Item 1", 2, "Three", 3.14, []]; //Array = List
const thing = null; // Has nothing in it
const notDefined = undefined; // Currently holds no value
const getAge = function() {return 31;}// This is a function
const obj = {
    'name': 'Ryan',
    'profession': 'Web Developer',

} // Object; can be accessed with obj['name']


//Conditional Statements
const twitter = '@progressive';

if(twitter == '@randersondev'){
    //Execute this code
    console.log('Twitter handle is @randersondev');
} else {
    //Execute this if the 'if statement' is false
    console.log ('This is not the correct user');
}


const myAge = 25;
if(myAge >= 18){
    console.log('IM ALLOWED TO VOTE!!');
}
if(myAge >= 21){
    console.log('I am allowed to drink')
}

const firstName = 'Ryan'
if(firstName == 'Ryan'){
    console.log('Welcome', firstName)
} else if (firstName == 'Jonathan'){
    console.log (firstName," is trash ")
} else {
    console.log ("No admittance")
}

//The DOM (Document Object Model)
//Reference HTML DOM google images
//Nodes are just an element with an opening closing tags


//Selecting elements by their ID's

// const box = document.getElementById('box');
// box.innerText = 'Something New'

//.innerText only changes the text with now html elements
//.innerHTML can manipulate html elements 


//OBJECTS
let person = {};
person = {
    'name': 'Ryan',
    'job': 'Network Specialist',
    'age': 31,
    'favFoods': ['Pizza', 'Tacos', 'BLT Wraps']
};
console.log(person['age']);



//STRING METHODS
const course = 'JavaScript 101: Coding for beginners'
console.log = (course.search("Coding"))