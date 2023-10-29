function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor((Math.random() * rps.length))];
}

function playRound(playerSelection, computerSelection) {
    // returns 0 if player loses, 1 if player wins, -1 if it's a tie
    if (playerSelection === computerSelection) {
        return -1;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return 0;
        else if (computerSelection === "scissors")
            return 1;
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return 1;
        else if (computerSelection === "scissors")
            return 0;
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return 0;
        else if (computerSelection === "paper")
            return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            let computerSelection = getComputerChoice();
            let playerSelection = event.target.id;
            let result = playRound(playerSelection, computerSelection);

            let resultText = document.querySelector(".score h2");

            if (result === 0) {
                computerScore++;
                resultText.textContent = "Computer scores!"
            }
            else if (result == 1) {
                playerScore++;
                resultText.textContent = "You score!"
            }
            else {
                resultText.textContent = "It's a tie!";
            }

            document.querySelector("#computer-weapon").textContent = "Computer chose: " + computerSelection;
            document.querySelector("#computer-score").textContent = "Computer: " + computerScore;
            document.querySelector("#player-weapon").textContent = "You chose: " + playerSelection;
            document.querySelector("#player-score").textContent = "Player: " + playerScore;

            if (playerScore === 5 || computerScore === 5) {
                let imgElement = document.querySelector("#result-gif");
                let h1Element = document.querySelector("#title");
                h1Element.remove();

                if (playerScore > computerScore) {
                    resultText.textContent = "You have won! Congrats! 😊";
                    imgElement.src = "https://media.tenor.com/XnM4jl_0hSIAAAAC/the-office-steve-carell.gif";
                }


                else {
                    resultText.textContent = "You have lost! Next time! 😞";
                    imgElement.src = "https://media.tenor.com/BtU_C4dDYbQAAAAC/rainn-wilson-crying.gif";
                }

                // disable all buttons
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].disabled = true;
                }
            }

        });
    }


}

game();


