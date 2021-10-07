'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNumber, secretNumber);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Number!';

    //   TOO HIGH
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '😆 Too high!';
    score--;
    document.querySelector('.score').textContent = score;

    // TOO LOW
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '😆 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
