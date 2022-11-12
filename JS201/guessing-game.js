// while(true){
//     number = prompt('Guess a number');
//     number = Number(number)

//     function getRandomNumber(){
//         const random = Math.random() * 10
//         const final = Math.floor(random)
//         return final
//     }
//     const random = getRandomNumber()
//     if(number === random){
//         break;
//     }
// }

// The solution
while(true){
    let num = prompt('Guess the number:');
    number = Number(num);


    const randomNumber = Math.ceil(Math.random() * 10);


    if (number === randomNumber){
        alert("You Win");
        break;
    } else {
        console.log ("You guessed", number, "But the right answer was", randomNumber)
    }
}