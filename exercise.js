'use strict';

// SEECRET NUMBER
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let currScore = document.querySelector('.score');
// let guess = document.querySelector('.guess');

let score = 20;
let highScore = 0;

// SEECRET NUMBER
number.textContent = secretNumber;
// CHECK - output
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (guess === secretNumber) {
    message.textContent = '👍 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      //   TOO HIGH
      message.textContent = '😆 Too high!';
      score--;
      currScore.textContent = score;

      // TOO LOW
    } else if (guess < secretNumber) {
      message.textContent = '😆 Too low!';
      score--;
      currScore.textContent = score;
    }
  } else message.textContent = '😁 Game over!';
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  currScore.textContent = 20;
  document.querySelector('.guess').value = '';
});
