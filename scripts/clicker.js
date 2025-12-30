let score = 0;
let timeLeft = 10;
let timerInterval;

const btnClick = document.getElementById('btn-click');
const btnPlay = document.getElementById('btn-play');
const btnReset = document.getElementById('btn-reset');
const timerDisplay = document.getElementById('timer');
const currentScoreDisplay = document.getElementById('current-score')
const finalBoard = document.getElementById('final-board');
const finalScoreDisplay = document.getElementById('final-score-label');

btnClick.addEventListener('click', () => {
    score++;
    currentScoreDisplay.textContent = score;
});

btnPlay.addEventListener('click', () => {
    score = 0;
    timeLeft = 10;
    currentScoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft + 's';

    btnPlay.disabled = true;
    btnPlay.classList.add('opacity-30');
    btnClick.disabled = false;
    btnReset.disabled = true;
    finalBoard.classList.add('hidden');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft + 's';

        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
});

const endGame = () => {
    clearInterval(timerInterval);

    btnClick.disabled = true;
    btnReset.disabled = false;

    finalScoreDisplay.textContent = score;
    finalBoard.classList.remove('hidden');
}

btnReset.addEventListener('click', () => {
    score = 0;
    timeLeft = 10;
    currentScoreDisplay.textContent = '0';
    timerDisplay.textContent = '10s';
    finalBoard.classList.add('hidden');
    btnPlay.disabled = false;
    btnPlay.classList.remove('opacity-30');
    btnReset.disabled = true;
});


