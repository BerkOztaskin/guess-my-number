'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!!";
//
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (selector, text) {
  document.querySelector(selector).textContent = text;
};

//*document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score - 1 > 0) {
    //+ WHEN NO INPUT
    if (!guess || guess < 0 || guess > 20) {
      displayMessage(
        '.message',
        !guess ? '❌ No number' : '❗❗Guess between the interval!'
      );
    }

    //- WHEN PLAYER WINS
    else if (guess === secretNumber) {
      displayMessage('.message', '🎉🎊 Correct Number! 🎊🎉');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (
        Number(document.querySelector('.highscore').textContent) <
          Number(document.querySelector('.score').textContent) &&
        document.querySelector('.number').textContent !== '?'
      ) {
        displayMessage('.highscore', score);
      }
    }
    //TODO:  WHEN GUESS IS WRONG
    else if (guess !== secretNumber) {
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      );
      score--;
      displayMessage('.score', score);
    }

    /*   
      //% WHEN GUESS IS TOO HIGH
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //& WHEN GUESS IS TOO LOW
    else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } */
  } else {
    displayMessage('.message', '💣 You lost the GAME');
    displayMessage('.score', 0);
    document.querySelector('body').style.backgroundColor = 'rgb(255,50,50)';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log(document.querySelector('.number').textContent);

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayMessage('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = 'rgb(92, 84, 84)';
  displayMessage('.guess', '');
  displayMessage('.score', score);
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.number', '?');
});
