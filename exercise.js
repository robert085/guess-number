'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNumber, secretNumber);
document.querySelector('.number').textContent = secretNumber;
let message = document.querySelector('.message');

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

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
      document.querySelector('.score').textContent = score;

      // TOO LOW
    } else if (guess < secretNumber) {
      message.textContent = '😆 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else message.textContent = '😁 Game over!';
});
