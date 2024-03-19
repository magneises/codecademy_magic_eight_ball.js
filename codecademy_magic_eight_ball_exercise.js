// TASK 1
// Define an empty varable userName
var userName = 'Jane';

// TASK 2
// Using ternary expression for userName Jame, if not, Hello!.
userName === 'Jane' ? console.log(`Hello ${userName}`) : console.log('Hello!');

// TASK 3
// Create var userQuestion to ask the Magic Eight Ball
let userQuestion = 'Will the Broncos be better next year?';

// TASK 4
// Write a console.log() for the userQuestion, stating what was asked. 
console.log(`${userName} wishes to know: ${userQuestion}`);

// TASK 5
// Crate a variable randomNumber that generates a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber); // checking work

// TASK 6
// Create an empty string var eightBall
let eightBall = '';

// TASK 7
// Create a control flow that takes in the randomNumber and then assigns this value to eightBall to a reply that a Magic Eight Ball would return.
/*
if (randomNumber = 0) {
  eightBall = 'It is certain';
} else if (randomNumber = 1) {
  eightBall = 'It is decidely so';
} else if (randomNumber = 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber = 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber = 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber = 5) {
  eightBall = 'My sources say no';
} else if (randomNumber = 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}
*/

// Additional practice using the switch method
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Please ask again';
    break;
}

// TASK 8
// Write a console.log() to pring the Magic Eight Ball's answer, the value of the eightBall variable
console.log(`Magic Eight Ball Says: ${eightBall}`)

// TASK 9 
// Run your program a few more times to see random results. Additional practice, use both else if and switch method. 
