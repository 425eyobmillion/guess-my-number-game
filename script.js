'use strict';

let guessAns = Math.trunc(Math.random() * 20 + 1);
// console.log(guessAns);
let score = 20;
let highscore = 0;

let displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');

        // When player wins
    } else if (guess === guessAns) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = guessAns;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== guessAns) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            // guess > guessAns ? '🤦‍♂️ Too high!' : '🤦‍♂️ Too low!';
            displayMessage(guess > guessAns ? '🤦‍♂️ Too high!' : '🤦‍♂️ Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('body').style.backgroundColor = '#f00';
            document.querySelector('.score').textContent = 0;
        }
    }

    // } else if (guess > guessAns) {
    //     // When guess is too high
    //     document.querySelector('.message').textContent = '🤦‍♂️ Too high!';
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < guessAns) {
    //     // When guess is too low
    //     document.querySelector('.message').textContent = '🤦‍♂️ Too low!';
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    guessAns = Math.trunc(Math.random() * 20) + 1;
    // console.log(guessAns);

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});