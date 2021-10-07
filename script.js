'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let seecretNumber = Math.trunc(Math.random() * 20) + 1; //random number 0<=20
let score = 20; //store in a variable to decrease the score
let highScore = 0;

// REFACTORING - repeatable code can be proccessed with new function.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// passing random number into.number field - try with reload the page
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('❌ No seecret number');

    //   When player wins
  } else if (guess === seecretNumber) {
    displayMessage('👍 Correct Number');
    document.querySelector('.number').textContent = seecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //   high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //  C) When guess is wrong - REFACTORING / DRY princip
  } else if (guess !== seecretNumber) {
    if (score > 1) {
      displayMessage(guess < seecretNumber ? '😆 Too low!' : '😆 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤷‍♂️ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  /* 
    //   A) When guess is too low
  } else if (guess < seecretNumber ) {
    if (score > 1) {
      displayMessage('😆 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤷‍♂️ You lost the game');
      document.querySelector('.score').textContent = 0;
    }

    //  B) When guess is too high
  } else if (guess > seecretNumber) {
    if (score > 1) {
      displayMessage('😆 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤷‍♂️ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }   
 */
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  seecretNumber = Math.trunc(Math.random() * 20) + 1; // restore (different number)

  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //   document.querySelector('.highscore').textContent = highScore;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
