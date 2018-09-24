let squares = document.getElementById("squares");
let result = document.getElementById("result");
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");

let player1Score = 0;
let player2Score = 0;

//modules for gameboard and controller
const gameBoard = {
    board: ["","","","","","","","",""]
}

let squared = document.getElementsByTagName("li");

const displayController = (e) => {
    if( squared[0].textContent == "X" && squared[1].textContent == "X" && squared[2].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[3].textContent == "X" && squared[4].textContent == "X" && squared[5].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[6].textContent == "X" && squared[7].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[0].textContent == "X" && squared[3].textContent == "X" && squared[6].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[1].textContent == "X" && squared[4].textContent == "X" && squared[7].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[2].textContent == "X" && squared[5].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[0].textContent == "X" && squared[4].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[2].textContent == "X" && squared[4].textContent == "X" && squared[6].textContent == "X"){
        result.textContent = player1.name + " wins";
        player1Score += 1;
    } else if( squared[0].textContent == "O" && squared[1].textContent == "O" && squared[2].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[3].textContent == "O" && squared[4].textContent == "O" && squared[5].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[6].textContent == "O" && squared[7].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[0].textContent == "O" && squared[3].textContent == "O" && squared[6].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[1].textContent == "O" && squared[4].textContent == "O" && squared[7].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[2].textContent == "O" && squared[5].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[0].textContent == "O" && squared[4].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if( squared[2].textContent == "O" && squared[4].textContent == "O" && squared[6].textContent == "O"){
        result.textContent = player2.name + " wins";
        player2Score += 1;
    } else if ( gameBoard.board.indexOf("") == -1){
        result.textContent = "It's a draw";
    }
    p1Score.textContent = player1.name + " : " + player1Score;
    p2Score.textContent = player2.name + " : " + player2Score;
}

const reset = () => {
    squared[0].textContent = "";
    squared[1].textContent = "";
    squared[2].textContent = "";
    squared[3].textContent = "";
    squared[4].textContent = "";
    squared[5].textContent = "";
    squared[6].textContent = "";
    squared[7].textContent = "";
    squared[8].textContent = "";
    gameBoard.board = ["","","","","","","","",""];
    result.textContent = "Game On!";
}

//factories for players
const player1 = {
    name: "Jack",
}

const player2 = {
    name: "Jill",
}

const renderBoard = () => {
    for(var i = 0; i < gameBoard.board.length; i++){
        let square = document.createElement("li");
        square.textContent = gameBoard.board[i];
        square.classList.add("square");
        square.id = "square" + (i + 1);
        square.setAttribute("data", i);

        let counter = 0;

        const markBoard = (e, index) => {
            let mark = "";

            if(e.target.textContent == ""){
                if(counter % 2 == 0){
                    mark = "X";
                    counter += 1;
                } else {
                    mark = "O";
                    counter += 1;
                }
                e.target.textContent = mark;
                console.log(e.target.getAttribute("data"));
                gameBoard.board[e.target.getAttribute("data")] = mark;
                displayController();
            } else {
                return;
            }
        }
        squares.addEventListener("click", markBoard);
        squares.append(square);
    }
}

renderBoard();
