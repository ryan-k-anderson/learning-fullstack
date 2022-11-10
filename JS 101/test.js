const elems = document.querySelectorAll(".this-class");
console.log(elems);
//This is selecting all the elements in the HTML file with the 'this-class' class

const elements = document.querySelectorAll('li');
elements.forEach(node =>{
    node.innerText = "This is changed";
});
//This will select all the li elements and change the inner text to "This is changed"

elements.forEach((node, index)=>{
    node.innerText = `Hello this is item ${index+1}`
});
//This takes the elements constant above on line 5 and takes the index parameter and changes the inner text to display what index it falls under
elements.forEach(node =>{
    node.classList.add('custom-class', 'second-class');
});
//This grabs the const elements which is targeting the li elements in the HTML document and assigning them a specific class
//ClassList is calling saying you want to use that function and the .add is saying you want to add the class names to the element

//FUNCTIONS 'DRY'
// DRY =  DONT REPEAT YOURSELF
const age = 31

if(age >=18){
    console.log("You can vote")
}
if(age >21){
    console.log('You can drink')
}

const secondAge = 15

if(age >=18){
    console.log("You can vote")
}
if(age >21){
    console.log('You can drink')
}

function addNumbers(){
    //logic
    return "answer"
}

const total = addNumbers(); //an answer
console.log(total)



//FUNCTIONS RE-USING CODE
function addNum(num1, num2){
    const total = num1 + num2;
    return total;
}

const addedTotal = addNum(17, 25)
console.log(addedTotal)

function greeting(name){
    return `Hello ${name}`;
};
console.log(greeting('Ryan'));
let rider = greeting('Ryan');
console.log(rider);



//THE REST OPERATOR
function adding(greetingName, ...numbers){
    //The ... is a rest meaning an infinite amount of parameters of that data type
    let absoluteTotal = 0
    for (index in numbers){
        absoluteTotal = absoluteTotal + numbers[index];
    };
    return `${greetingName}: the total is ${absoluteTotal}`;
};
const newTotal = adding('Ryan', 1, 3, 5, 7, 9);
console.log(newTotal)



//OBJECTS WITH FUNCTIONS
const athlete = {
    'name': 'Ryan',
    'age': 25,
    'height': "5'9\"",
    'speak': function(want='cookies'){
        console.log(`Meow I want ${want}`)
    },
    talk() {
        console.log('I am talking')
    }
}
athlete.speak('Pizza')
athlete.talk()


