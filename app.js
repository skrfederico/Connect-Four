console.log('it works')

// MODAL
const modal = document.querySelector('#modal')
const openBtn = document.querySelector('#openModal')
const closeBtn = document.querySelector('#close')

const openModal = () => {
  modal.style.display = 'block'
}
openBtn.addEventListener('click', openModal)

const closeModal = () => {
  modal.style.display = 'none'
}
closeBtn.addEventListener('click', closeModal)

// SETTING UP THE GAME
function setPlayerName() {
  globalThis.p1 = document.getElementById('p1name').value
  document.getElementById(
    'message'
  ).innerHTML = `Welcome ${p1}. You'll use X tokens`
  document.getElementById('chooseName').innerHTML = `Who else's playing?<br>
  Name: <input type="text" id="p2name" name="value" value="Player 2"><br>
  <button onclick="setBoard()">Let's play!</button><br>`
}

function setBoard() {
  globalThis.p2 = document.getElementById('p2name').value
  document.getElementById(
    'message'
  ).innerHTML = `You are also welcome,${p2}. You'll use O tokens! <br> Let's do this!`
  document.getElementById('chooseName').innerHTML = ``
  document.getElementById('playArea').style.display = 'flex'
  document.getElementById('turn').style.display = 'flex'
}

const squares = document.querySelectorAll('.grid div')
const sb1squares = document.querySelectorAll('.sb1-column div')
const sb2squares = document.querySelectorAll('.sb2-column div')
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('current-player')
const displayCurrentMatch = document.getElementById('current-match')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

let matchNumber = 1

// function eraseClasses() {
//   for (let i = 0; i < 41; i++) {
//     squares[i].classList.remove('bottom')
//   }
// }

// function playAgain() {
//   for (let i = 0; i < squares.length; i++) {
//     // squares[i].classList.add('bottom')
//     squares[i].classList.remove('player1')
//     squares[i].classList.remove('player2')
//     currentPlayer = 1
//     eraseClasses()
//   }
// }

class GameBoard {
  constructor() {
    this.board = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ]
  }

  placeToken(player1, x) {
    this.board[x][y] = player1

    this.checkForWinner()
  }

  refreshBoard() {
    // Loop over this.board and add the appropriate class to the correct
    // cell in the dom

    //MY CODE BELOW
    function eraseClasses() {
      for (let i = 0; i < 41; i++) {
        board[i][j].classList.remove('bottom')
      }
    }
    //how to loop in a 2d array
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j].classList.remove('xSquare')
        board[i][j].classList.remove('oSquare')
        board[i][j].innerText = ''
        eraseClasses()
      }
    }
  }

  checkForWinner() {
    // /   for (let r = 0; r < example.length; r++) {
    //     for (let c = 0; c < example[r].length; c++) {
    //       const node = example[r][c];
    //       const coords = {
    //         x: r,
    //         y: c,
    //       };
    //       console.log(node, coords);
    //     }
    //   }
    // if (
    //   squares[i + 7].classList.contains('bottom') &&
    //   !squares[i].classList.contains('bottom')
    // ) {
    //   if (currentPlayer == 1) {
    //     squares[i].classList.add('bottom')
    //     squares[i].classList.add('player1')
    //     currentPlayer = 2
    //     displayCurrentPlayer.innerHTML = currentPlayer
    //   } else if (currentPlayer == 2) {
    //     squares[i].classList.add('bottom')
    //     squares[i].classList.add('player2')
    //     currentPlayer = 1
    //     displayCurrentPlayer.innerHTML = currentPlayer
    //   }
    // } else alert('invalid move')
  }
}
/// this is the end of the class

let board = new GameBoard()

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    // changeTurns(i)
    if (
      squares[i + 7].classList.contains('bottom') &&
      !squares[i].classList.contains('bottom') &&
      squares[i].innerText === ''
    ) {
      if (currentPlayer == playerX) {
        squares[i].classList.add('bottom')
        squares[i].classList.add('xSquare')
        squares[i].innerHTML = currentPlayer
        board[i] = currentPlayer
        currentPlayer = playerO
        displayCurrentPlayer.innerHTML = currentPlayer
      } else if (currentPlayer == playerO) {
        squares[i].classList.add('bottom')
        squares[i].classList.add('oSquare')
        squares[i].innerHTML = currentPlayer
        board[num][num] = currentPlayer
        currentPlayer = playerX
        displayCurrentPlayer.innerHTML = currentPlayer
      }
    } else alert(`invalid move`)
  })
}

// // changeTurns function
// function changeTurns(num) {
//   if (squares[num].innerText === '' && currentPlayer) {
//     squares[num].innerText = currentPlayer
//     if (currentPlayer === 'X') {
//       squares[num].classList.add('xSquare')
//       currentPlayer = 'O'
//     } else {
//       squares[num].classList.add('oSquare')
//       currentPlayer = 'X'
//     }
//     // checkForWinner()
//   }
// }

//how to loop in a 2d array
for (let i = 0; i < board.length; i++) {
  let subarray = board[i]

  for (let j = 0; j < subarray.length; j++) {
    console.log(subarray[j])
  }
}

// RECURSION
// function checkWin(n)
// {
//   //1) base case
//   if(board[i][j] == playerX)
//   //2) recursive call to itself
//   checkWin(next square)
//   else
//   return
// }
