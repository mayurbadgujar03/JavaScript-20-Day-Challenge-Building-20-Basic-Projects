const guessInput = document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuessBtn');

const hint = document.getElementById('hint');
const result = document.getElementById('result');

const playAgainBtn = document.getElementById('playAgainBtn');

submitGuessBtn.addEventListener('click', () => Game());
playAgainBtn.addEventListener('click', () => {
    result.innerText = "";
    guessInput.value = "";
    playAgainBtn.style="display: none;"
    x = Math.floor(Math.random() * 100);
})

let x = Math.floor(Math.random() * 100);

function Game() {
    console.log(x);

    if (guessInput.value == x) {
        result.innerText = x;
        playAgainBtn.style="display;"

    } else if (guessInput.value < x) {
        result.innerText = "Nope! guess higher number";
    }
    else {
        result.innerText = "Nope! guess lower number";
    }

}