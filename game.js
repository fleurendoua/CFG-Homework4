const userName = prompt("Welcome to the shopping lotery ! What is your name ?");

console.log(userName);

let userAnswer = prompt('What is you favorite drink : "water" or "soda" ?');

if (userAnswer == "water") {
  alert("Hurray ! You win a pack of 12 bottles of mineral water");
} else {
  alert("Sorry, you are not the winner today! Try tomorrow !");
}
