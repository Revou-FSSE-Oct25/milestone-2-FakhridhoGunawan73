let secretNumber = Math.floor(Math.random() * 100) + 1;
let historyGuess = [];
let attempts = 10;

const inputNumber = document.getElementById('input-number');
const btnCek = document.getElementById('btn-cek');
const message = document.getElementById('message');
const historyDisplay = document.getElementById('history');
const resetGame = document.getElementById('btn-reset');
const attemptsDisplay = document.getElementById('attempts-count');

function cekNumber() {
    const userGuess = Number(inputNumber.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Masukkan angka yang valid (1-100)!";
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
        btnCek.disabled = true;
    } else if (attempts === 0) {
        message.textContent = `Game Over! Angka rahasianya adalah ${secretNumber}`;
        message.className = "mt-4 text-bold text-red-600"
    } else if (userGuess > secretNumber) {
        message.textContent = "Too High, Try lower number again";
        message.className = "mt-4 text-bold text-red-400";
    } else {
        message.textContent = "Too Low, Try Higher number again";
        message.className = "mt-4 text-bold text-cyan-400";
    }

    inputNumber.value = "";
    inputNumber.focus();
}

function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    historyGuess = [];
    message.textContent = "Game start again! Guess again...";
    historyDisplay.textContent = "";
    btnCek.disabled = false;
    inputNumber.value = '';
}

btnCek.addEventListener('click', cekNumber);
resetGame.addEventListener('click', newGame);