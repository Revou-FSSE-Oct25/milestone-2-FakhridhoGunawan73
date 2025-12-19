const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const winningScore = 3;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const btnNewGame = document.getElementById('btn-new-game');
const choiceButtons = document.querySelectorAll('.choice-btn');

const emojiMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getResult = (player, computer) => {
    if (player === computer) return "IT'S A DRAW! 🤝";

    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    resultText.textContent = 'Choose Your Weapon!';
    resultText.style.color = 'white';
    playerDisplay.textContent = '?';
    computerDisplay.textContent = '?';
    btnNewGame.classList.add('hidden');
    choiceButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('opacity-30');
    });
};

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (playerScore === winningScore || computerScore === winningScore)
            return;

        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();

        playerDisplay.textContent = emojiMap[playerChoice];
        computerDisplay.textContent = emojiMap[computerChoice];

        const result = getResult(playerChoice, computerChoice);

        if (result.includes('WIN')) {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultText.style.color = 'green';
        } else if (result.includes('LOSE')) {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultText.style.color = 'red';
        }

        resultText.textContent = result;

        if (playerScore === winningScore || computerScore === winningScore) {
            resultText.textContent = playerScore === winningScore ? "CONGRATS! CHAMPION!" : "COMPUTER WIN THE MATCH!";
            resultText.style.color = 'yellow';
            btnNewGame.classList.remove('hidden');
            choiceButtons.forEach(btn => {
                btn.disabled = true;
                btn.classList.add('opacity-30');
            });
        }

    });

});

btnNewGame.addEventListener('click', resetGame);