const MAX_NUMBER = 100;
const MAX_ATTEMPTS = 10;

let secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
let historyGuess = [];
let attempts = 10;
let isGameOver = false;

const inputNumber = document.getElementById('input-number');
const btnCheck = document.getElementById('btn-check');
const message = document.getElementById('message');
const historyDisplay = document.getElementById('history');
const resetGame = document.getElementById('btn-reset');
const attemptsDisplay = document.getElementById('attempts-count');

btnCheck.disabled = true;

function checkNumber() {
    const userGuess = Number(inputNumber.value);

    if (!userGuess || userGuess < 1 || userGuess > MAX_NUMBER) {
        message.textContent = `Masukkan angka yang valid 1-${MAX_NUMBER}!`;
        return;
    }

    if (historyGuess.includes(userGuess)) {
        message.textContent = `Angka ${userGuess} sudah pernah ditebak! Coba angka lain`;
        message.className = "mt-4 font-bold text-orange-400";
        inputNumber.value = "";
        return;
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    historyGuess.push(userGuess);
    historyDisplay.textContent = historyGuess.join(', ');

    if (userGuess === secretNumber) {
        message.textContent = "Correct!";
        message.className = "mt-4 font-bold text-yellow-400";
        btnCheck.disabled = true;
        isGameOver = true;
        resetGame.classList.remove('hidden');
    } else if (attempts === 0) {
        message.textContent = `Game Over! Angka rahasianya adalah ${secretNumber}`;
        message.className = "mt-4 text-bold text-red-600"
        btnCheck.disabled = true;
        isGameOver = true;
        resetGame.classList.remove('hidden');
    } else if (userGuess > secretNumber) {
        message.textContent = "Too High, Try lower number again";
        message.className = "mt-4 text-bold text-red-400";
    } else {
        message.textContent = "Too Low, Try Higher number again";
        message.className = "mt-4 text-bold text-cyan-400";
    }

    inputNumber.value = "";
    btnCheck.disabled = true;
    inputNumber.focus();
}

function newGame() {
    secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    historyGuess = [];
    attempts = MAX_ATTEMPTS;
    attemptsDisplay.textContent = attempts;
    isGameOver = false;
    resetGame.classList.add('hidden');
    message.textContent = "Game start again! Guess again...";
    message.className = "mt-4 font-bold";
    historyDisplay.textContent = "";
    btnCheck.disabled = true;
    inputNumber.value = '';
}

inputNumber.addEventListener('input', function () {
    if (!isGameOver && inputNumber.value.trim() !== "") {
        btnCheck.disabled = false;
    } else {
        btnCheck.disabled = true;
    }
});

btnCheck.addEventListener('click', checkNumber);
resetGame.addEventListener('click', newGame);