const name = document.getElementById('name');
const eyecolor = document.getElementById('eyecolor');
const birthyear = document.getElementById('birthyear');
const button = document.querySelector('.getRandomCharacter');
button.addEventListener('click', (e) => {
    e.preventDefault();
    //e.preventDefault prevents the button submitting if it was in a form and refreshing your page
    // console.log('CLICKED')
    name.innerHTML = '<em>Loadding...</em>';
    eyecolor.innerHTML = '<em>Loadding...</em>';
    birthyear.innerHTML = '<em>Loadding...</em>';

    const randomNumber = Math.ceil(Math.random() * 83);
    //There are 83 people in this API to get their character ID number we use this to randomly select a number

    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
    //Used a teplate literal to accept the variable random Number in the place of the hard coded 3
    .then(response => response.json())
    .then(character => {
        console.log(character);
        name.innerHTML = character['name'];
        eyecolor.innerHTML = character['eye_color'];
        birthyear.innerHTML = character['birth_year'];
    })
})



