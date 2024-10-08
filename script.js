let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("player-score");
const compScorePara = document.getElementById("computer-score");

const choices = document.querySelectorAll(".choice");
const msgResult = document.getElementById("result-text");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgResult.innerText = "You Win!";
        msgResult.style.backgroundColor = "green";
        msgResult.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msgResult.innerText = "You Lose!";
        msgResult.style.backgroundColor = "red";
        msgResult.style.color = "white";
    }
};

const drawGame = () => {
    msgResult.innerText = "TIE!";
    msgResult.style.backgroundColor = "yellow";
    msgResult.style.color = "black";
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("User =", userChoice);
    console.log("Comp =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
