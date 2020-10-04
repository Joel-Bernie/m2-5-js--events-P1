// Exercise 1.0
// ------------
console.log('exercise-1');



let body = document.querySelector('body');

function handleClick() {
   let main = document.querySelector('#main');
   main.innerText = ("You win!");
}

body.addEventListener('click', handleClick);