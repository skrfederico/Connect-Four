const squares = document.querySelectorAll('.grid>div')
const test = document.querySelector('.grid')
const sb1squares = document.querySelectorAll('.sb1-column div')
const sb2squares = document.querySelectorAll('.sb2-column div')
const message = document.getElementById('message')
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('current-player')
const displayCurrentMatch = document.getElementById('current-match')
const reset = document.querySelector('#playAgain')
let playerOne = document.getElementById('one')
let playerTwo = document.getElementById('two')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

let p1, p2, winningPlayer

// SETTING UP THE GAME
function setPlayers() {
  if (playerOne.value) {
    p1 = playerOne.value
  } else {
    p1 = 'Player One'
  }
  p2 = playerTwo.value ? playerTwo.value : 'Player Two'
  const players = {
    x: p1,
    o: p2
  }
  return players
}
function setBoard() {
  let x = setPlayers().x
  let o = setPlayers().o
  document.getElementById('p1score').innerText = `Go ${x}!!!`
  document.getElementById('p2score').innerText = `Go ${o}!!!`
  document.getElementById('chooseName').style.display = 'none'
  document.getElementById('playArea').style.display = 'flex'
  document.getElementById('turn').style.display = 'flex'
}

function placeWinningToken(squares, player, cellname) {
  let squareName = cellname === 'sb1-col-row1' ? 'xSquare' : 'oSquare'
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].id === cellname) {
      if (winningPlayer === player) {
        squares[i].classList.add(squareName)
        squares[i].innerHTML = winningPlayer
      }
    } else if (squares[i + 1].innerText === player) {
      squares[i].classList.add(squareName)
      squares[i].innerHTML = winningPlayer
      if (squares[0].innerHTML === player) {
        ;`You've won!`
      }
    }
    document.getElementById('message').innerHTML = ``
    document.getElementById('result').innerHTML = ``
  }
}

class GameBoard {
  constructor(board) {
    this.board = board
  }

  // INSIDE GAME LOGIC

  refreshBoard() {
    //MY CODE: ARROW FUNCTION INSIDE GAME LOGIC
    //how to loop in a 2d array
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        console.log('reset clicked')
        board[i][j].classList.remove('xSquare')
        board[i][j].classList.remove('oSquare')
        board[i][j].innerText = ''
      }
    }
  }

  checkForWinner() {
    function checkForHor() {
      for (let i = 0; i < squares.length; i++) {
        let subarray = squares[i].children
        for (let j = 0; j < subarray.length; j++) {
          if (
            subarray[j + 1] &&
            subarray[j + 2] &&
            subarray[j + 3] &&
            subarray[j + 1].innerText
          ) {
            if (subarray[j].innerText === 'X') {
              if (subarray[j].innerText === subarray[j + 1].innerText) {
                if (subarray[j + 1].innerText === subarray[j + 2].innerText) {
                  if (subarray[j + 2].innerText === subarray[j + 3].innerText) {
                    winningPlayer = playerX
                    alert`X connected 4 horizontally`
                    winningActions()
                  }
                }
              }
            } else if (subarray[j].innerText === 'O') {
              if (subarray[j].innerText === subarray[j + 1].innerText) {
                if (subarray[j + 1].innerText === subarray[j + 2].innerText) {
                  if (subarray[j + 2].innerText === subarray[j + 3].innerText) {
                    winningPlayer = playerO
                    alert`O connected 4 horizontally`
                    winningActions()
                  }
                }
              }
            }
          }
        }
      }
    }
    checkForHor()

    function checkForVer() {
      for (let r = 0; r < squares.length; r++) {
        let subarray = squares[r].children
        for (let c = 0; c < subarray.length; c++) {
          const node = subarray[c]
          const coords = {
            x: r,
            y: c
          }
          if (
            squares[r + 1] &&
            squares[r + 2] &&
            squares[r + 3] &&
            squares[r + 1].children[c] &&
            squares[r + 2].children[c] &&
            squares[r + 1].children[c].innerText
          ) {
            if (squares[r].children[c].innerText === 'X') {
              if (
                squares[r].children[c].innerText ===
                squares[r + 1].children[c].innerText
              ) {
                if (
                  squares[r + 1].children[c].innerText ===
                  squares[r + 2].children[c].innerText
                ) {
                  if (
                    squares[r + 2].children[c].innerText ===
                    squares[r + 3].children[c].innerText
                  ) {
                    winningPlayer = playerX
                    alert`X connected 4 vertically`
                    winningActions()
                  }
                }
              }
            } else if (squares[r].children[c].innerText === 'O') {
              if (
                squares[r].children[c].innerText ===
                squares[r + 1].children[c].innerText
              ) {
                if (
                  squares[r + 1].children[c].innerText ===
                  squares[r + 2].children[c].innerText
                ) {
                  if (
                    squares[r + 2].children[c].innerText ===
                    squares[r + 3].children[c].innerText
                  ) {
                    winningPlayer = playerO
                    alert`O connected 4 vertically`
                    winningActions()
                  }
                }
              }
            }
          }
          // console.log(node, coords)
        }
      }
    }
    checkForVer()

    // check diag1
    function checkForDiagOne() {
      let diagOneNoughtsCounter = 1
      let diagOneCrossesCounter = 1
      for (let i = 0; i < squares.length; i++) {
        let subarray = squares[i].children
        for (let j = 0; j < subarray.length; j++) {
          let currentCell = subarray[j]
          if (
            //introducing the 'cells'
            squares[i + 1] &&
            squares[i + 2] &&
            squares[i + 3] &&
            currentCell.innerText &&
            squares[i + 1].children[j + 1]
            // squares[i + 1].children[j - 1]
            // squares[i + 1].children[j + 2]
          ) {
            // if square has X
            if (squares[i].children[j].innerText === 'X') {
              //actual connection
              if (
                squares[i].children[j].innerText ===
                squares[i + 1].children[j + 1].innerText
              ) {
                if (
                  squares[i + 1].children[j + 1].innerText ===
                  squares[i + 2].children[j + 2].innerText
                ) {
                  if (
                    squares[i + 2].children[j + 2].innerText ===
                    squares[i + 3].children[j + 3].innerText
                  ) {
                    winningPlayer = playerX
                    alert`X connected 4 diagonally`
                    winningActions()
                  }
                }
              }
            } else if (squares[i].children[j].innerText === `O`)
              if (
                squares[i].children[j].innerText ===
                squares[i + 1].children[j + 1].innerText
              ) {
                if (
                  squares[i + 1].children[j + 1].innerText ===
                  squares[i + 2].children[j + 2].innerText
                ) {
                  if (
                    squares[i + 2].children[j + 2].innerText ===
                    squares[i + 3].children[j + 3].innerText
                  ) {
                    winningPlayer = playerO
                    alert`O connected 4 diagonally`
                    winningActions()
                  }
                }
              } //actual connection
            if (
              squares[i].children[j].innerText ===
              squares[i + 1].children[j - 1].innerText
              // NESTED VERSION
            ) {
              if (
                squares[i + 1].children[j - 1].innerText ===
                squares[i + 2].children[j - 2].innerText
              ) {
                if (
                  squares[i + 2].children[j - 2].innerText ===
                  squares[i + 3].children[j - 3].innerText
                ) {
                  winningPlayer = playerX
                  alert`X connected 4 diagonally B`
                  winningActions()
                }
              }
            }
          } else if (squares[i].children[j].innerText === `O`) {
            if (
              squares[i].children[j].innerText ===
              squares[i + 1].children[j - 1].innerText
            ) {
              if (
                squares[i + 1].children[j - 1].innerText ===
                squares[i + 2].children[j - 2].innerText
              ) {
                if (
                  squares[i + 2].children[j - 2].innerText ===
                  squares[i + 3].children[j - 3].innerText
                ) {
                  winningPlayer = playerO
                  alert`O connected 4 diagonally B`
                  winningActions()
                }
              }
            }
          }
        }
      }
    }
    checkForDiagOne()
  }
}
/// this is the end of the class

let connectFour = new GameBoard(squares)
let board = connectFour.board

function winningActions() {
  if (winningPlayer === 'X') {
    placeWinningToken(sb1squares, playerX, 'sb1-col-row1')
  } else {
    placeWinningToken(sb2squares, playerO, 'sb2-col-row1')
  }
  document.getElementById('playAgain').click()
}
function setSquare() {
  test.addEventListener('click', (event) => {
    let target = event.target
    let parent = target.parentElement
    let index = [...parent.children].indexOf(target)
    let parentId = parent.id
    let uncle = parent.nextSibling.nextSibling
    let cousins = [...uncle.children]
    let cousin = cousins[index]?.innerText

    if (parentId === 'row5' || cousin) {
      target.innerHTML = currentPlayer
      let square = currentPlayer === 'X' ? 'xSquare' : 'oSquare'
      target.classList.add(square)
      displayCurrentPlayer.innerHTML = currentPlayer
      message.innerHTML = `<span id="current-player"></span>`
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  })
  return currentPlayer
}

const playAgain = () => {
  console.log('reset clicked')
  subarray[j].classList.remove('xSquare')
  subarray[j].classList.remove('oSquare')
  subarray[j].innerText = ''
  displayCurrentPlayer.style.display = `inline`
}
reset.addEventListener('click', playAgain)

function gamePlay() {
  console.log(setSquare())
  // setSquare()

  connectFour.checkForWinner()
}
gamePlay()
// reset.addEventListener('click', connectFour.refreshBoard())
//   }
// }
