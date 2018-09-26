let squares = document.getElementById("squares");
let result = document.getElementById("result");
let turn = document.getElementById("turn");
let p1Tally = document.getElementById("p1tally");
let p2Tally = document.getElementById("p2tally");
let squared = document.getElementsByTagName("li");

let player1Score = 0;
let player2Score = 0;

const gameBoard = {
    board: ["","","","","","","","",""]
}

const displayController = (e) => {
    if( squared[0].textContent == "X" && squared[1].textContent == "X" && squared[2].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[3].textContent == "X" && squared[4].textContent == "X" && squared[5].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[6].textContent == "X" && squared[7].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[0].textContent == "X" && squared[3].textContent == "X" && squared[6].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[1].textContent == "X" && squared[4].textContent == "X" && squared[7].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[2].textContent == "X" && squared[5].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[0].textContent == "X" && squared[4].textContent == "X" && squared[8].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[2].textContent == "X" && squared[4].textContent == "X" && squared[6].textContent == "X"){
        result.textContent = player1.name + " wins!";
        tictactoe();
        player1Score += 1;
    } else if( squared[0].textContent == "O" && squared[1].textContent == "O" && squared[2].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[3].textContent == "O" && squared[4].textContent == "O" && squared[5].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[6].textContent == "O" && squared[7].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[0].textContent == "O" && squared[3].textContent == "O" && squared[6].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[1].textContent == "O" && squared[4].textContent == "O" && squared[7].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[2].textContent == "O" && squared[5].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[0].textContent == "O" && squared[4].textContent == "O" && squared[8].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if( squared[2].textContent == "O" && squared[4].textContent == "O" && squared[6].textContent == "O"){
        result.textContent = player2.name + " wins!";
        tictactoe();
        player2Score += 1;
    } else if ( gameBoard.board.indexOf("") == -1){
        result.textContent = "It's a draw";
        tictactoe();
    }
    p1tally.textContent = player1.name + " : " + player1Score;
    p2tally.textContent = player2.name + " : " + player2Score;
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
    result.textContent = "Rematch!";
}

const tictactoe = () => {
    squared[0].textContent = "T";
    squared[1].textContent = "I";
    squared[2].textContent = "C";
    squared[3].textContent = "T";
    squared[4].textContent = "A";
    squared[5].textContent = "C";
    squared[6].textContent = "T";
    squared[7].textContent = "O";
    squared[8].textContent = "E";
}

let player1 = {
    name: "",
}

let player2 = {
    name: "",
}

player1.name = prompt("Team X : Enter player name", "Player One");
player2.name = prompt("Team O : Enter player name", "Player Two");

p1Tally.textContent = player1.name;
p2Tally.textContent = player2.name;

turn.textContent = player1.name + "'s turn";

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
                    turn.textContent = player2.name + "'s turn";
                } else {
                    mark = "O";
                    counter += 1;
                    turn.textContent = player1.name + "'s turn";
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
