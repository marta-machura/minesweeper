document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
/*board.cells = [
  {
    row: 0, 
    col: 0, 
    isMine: true,
    hidden: true
  }, 
  {
    row: 0, 
    col: 1, 
    isMine: false,
    hidden: true
  },
  {
    row: 0,
    col: 2,
    isMine: false,
    hidden: true
  },
  {
    row: 1, 
    col: 0,
    isMine: false,
    hidden: true
  }, 
  {
    row: 1, 
    col: 1,
    isMine: false,
    hidden: true
  },
  {
    row: 1,
    col: 2,
    isMine: false,
    hidden: true
  },
  {
    row: 2,
    col: 0,
    isMine: false,
    hidden: true
  },
  {
    row: 2,
    col: 1,
    isMine: false,
    hidden: true
  },
  {
    row: 2,
    col: 2,
    isMine: false,
    hidden: true
  } 
]*/

function boardCreator(board) {
  board.cells = [];
  newCell = 0;
  
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      board.cells[newCell] = {};
      board.cells[newCell].row = i;
      board.cells[newCell].col = j;
      board.cells[newCell].isMine = (Math.random() >= 0.75);
      board.cells[newCell].hidden = true;
      newCell++
      
      }
    }
  }
  
  boardCreator(board);

function startGame () {

  for (let i = 0; i < board.cells.length; i++) {
   let cell = board.cells[i]
   cell.surroundingMines = countSurroundingMines(cell)
  };
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

document.onclick = checkForWin

window.oncontextmenu = checkForWin


function resetGame(){
  window.location.reload();
} 




//document.getElementById('myButton').onclick = boardCreator(board)
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let isWinner = true
  for (let i = 0; i < board.cells.length; i++) {
    let cell = board.cells[i]
    if (cell.isMine && !cell.isMarked) {
      isWinner = false;
    }
  }
  if(isWinner){
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  //var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
 
  let count = 0;
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);

  for (i = 0; i < surrounding.length; i++) {
  let cell = surrounding[i]

  if (cell.isMine) {
    count++
  }
    
  }

  return count
  console.log(count)
}

//let reset = init()
//let myButton = document.getElementById('myButton');
//myButton.onclick = init()
//function init() {
  //boardCreator(board);
  
//}
