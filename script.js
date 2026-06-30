const board = document.getElementById("board");

const pieces = [

["♜","♞","♝","♛","♚","♝","♞","♜"],
["♟","♟","♟","♟","♟","♟","♟","♟"],
["","","","","","","",""],
["","","","","","","",""],
["","","","","","","",""],
["","","","","","","",""],
["♙","♙","♙","♙","♙","♙","♙","♙"],
["♖","♘","♗","♕","♔","♗","♘","♖"]

];
let selectedRow = null;
let selectedCol = null;

function drawBoard(){

    board.innerHTML="";

    for(let row=0;row<8;row++){

        for(let col=0;col<8;col++){

            const square=document.createElement("div");

            square.classList.add("square");

            if((row+col)%2==0)
                square.classList.add("white");
            else
                square.classList.add("black");

            square.textContent=pieces[row][col];

            board.appendChild(square);
            square.textContent = pieces[row][col];
            square.addEventListener("click", () => {
    handleClick(row, col);
});
if (row === selectedRow && col === selectedCol) {
    square.style.background = "green";
}
        }

    }

}

drawBoard();
function handleClick(row, col) {

    // First click - select a piece
    if (selectedRow === null) {

        if (pieces[row][col] !== "") {

            selectedRow = row;
            selectedCol = col;

        }

    }

    // Second click - move the piece
    else {

        pieces[row][col] = pieces[selectedRow][selectedCol];
        pieces[selectedRow][selectedCol] = "";

        selectedRow = null;
        selectedCol = null;

    }

    drawBoard();

}