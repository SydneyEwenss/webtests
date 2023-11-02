let playerScore = 0;
let botScore = 0;

const userHand = (hand) => {
    console.log(hand);

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let winner = document.querySelector(".winner");
    winner.style.display = "flex";

    document.getElementById("userPickImage").src = `../imgs/${hand}.png`;

    let botHand = botHandSelector();
    decideWinner(hand, botHand);
}

const botHandSelector = () => {
    let hands = ["rock", "paper", "scissors"];
    let botHand = hands[Math.floor(Math.random() * 3)];
    
    document.getElementById("botPickImage").src = `../imgs/${botHand}.png`;

    return botHand;
}

const playAgain = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let winner = document.querySelector(".winner");
    winner.style.display = "none";
}

const decideWinner = (playerHand, botHand) => {

    if (playerHand == botHand) {setWinner("It's a tie!")};
    if (playerHand == "rock" && botHand == "paper") {setWinner("You lose :("); addScore("bot");};
    if (playerHand == "rock" && botHand == "scissors") {setWinner("You win!"); addScore("player");};
    if (playerHand == "paper" && botHand == "rock") {setWinner("You win!"); addScore("player");};
    if (playerHand == "paper" && botHand == "scissors") {setWinner("You lose :("); addScore("bot");};
    if (playerHand == "scissors" && botHand == "rock") {setWinner("You lose :("); addScore("bot");};
    if (playerHand == "scissors" && botHand == "paper") {setWinner("You win!"); addScore("player");};

}

const setWinner = (winner) => {
    document.querySelector(".result h1").innerText = winner;
}

const addScore = (player) => {
    if (player == "player") {
        playerScore++;
        document.querySelector(".playerScore h1").innerText = playerScore;
        console.log(playerScore);
    } else {
        botScore++;
        document.querySelector(".botScore h1").innerText = botScore;
    }
}