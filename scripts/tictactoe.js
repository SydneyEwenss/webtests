const game = document.querySelector('#game');
const info = document.querySelector('#info');
const startCells = [
    "", "", "", "", "", "", "", "", ""
]
let go = "circle";
info.textContent = "Circle go first";


function createGame() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        game.append(cellElement);
    });
}

createGame()

function addGo(e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    info.textContent = "It is now " + go + "'s go";
    e.target.removeEventListener('click', addGo);
    checkScore();
}

function checkScore() {
    squares = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
            squares[cell].firstChild?.classList.contains('circle'));

        if (circleWins) {
            info.textContent = "Circle Wins!"
            squares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
    });

    winningCombos.forEach(array => {
        const crossWins = array.every(cell =>
            squares[cell].firstChild?.classList.contains('cross'));

        if (crossWins) {
            info.textContent = "Cross Wins!"
            squares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
    });

    
}