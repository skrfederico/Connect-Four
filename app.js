console.log('it works')

// MODAL
const modal = document.querySelector('#modal')
const openBtn = document.querySelector('#openModal')
const closeBtn = document.querySelector('#close')
const reset = document.querySelector('#playAgain')

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
  ).innerHTML = `You are also welcome, ${p2}. You'll use O tokens! <br> Let's do this!`
  document.getElementById('chooseName').innerHTML = ``
  document.getElementById('playArea').style.display = 'flex'
  document.getElementById('turn').style.display = 'flex'
}

function placeWinningToken() {
  for (let i = 0; i < sb1squares.length; i++) {
    if (sb1squares[i].id === 'sb1-col-row1') {
      if (winningPlayer === playerX) {
        sb1squares[i].classList.add('xSquare')
        sb1squares[i].innerHTML = winningPlayer
      }
    } else if (sb1squares[i + 1].innerText === playerX) {
      sb1squares[i].classList.add('xSquare')
      sb1squares[i].innerHTML = winningPlayer
    }
    document.getElementById('message').innerHTML = ``
    document.getElementById('result').innerHTML = ``
  }
  //  HELP! how can I make it DRY?
  for (let j = 0; j < sb2squares.length; j++) {
    if (sb2squares[j].id === 'sb2-col-row1') {
      if (winningPlayer === playerO) {
        sb2squares[j].classList.add('oSquare')
        sb2squares[j].innerHTML = winningPlayer
      }
    } else if (sb1squares[j + 1].innerText === playerO) {
      sb2squares[j].classList.add('oSquare')
      sb2squares[j].innerHTML = winningPlayer
    }
    document.getElementById('message').innerHTML = ``
    document.getElementById('result').innerHTML = ``
  }
}

function winningActions() {
  displayCurrentPlayer.style.display = 'none'
  document.getElementById(
    'message'
  ).innerHTML = `${winningPlayer} has connected four!`
  document.getElementById(
    'result'
  ).innerHTML = `Hooray! <br><button onclick="placeWinningToken()">Place Token</button><br>`
  // setTimeout(playAgain, 3000)
}

const squares = document.querySelectorAll('.grid>div')
const sb1squares = document.querySelectorAll('.sb1-column div')
const sb2squares = document.querySelectorAll('.sb2-column div')
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('current-player')
const displayCurrentMatch = document.getElementById('current-match')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
let winningPlayer

let matchNumber = 1

class GameBoard {
  constructor(board) {
    this.board = board
  }

  // INSIDE GAME LOGIC
  // placeToken(player1, x) {
  //   this.board[x][y] = player1
  //   this.checkForWinner()
  // }

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
          if (subarray[j + 1] && subarray[j + 1].innerText) {
            if (subarray[j].innerText === 'X') {
              if (subarray[j].innerText === subarray[j + 1].innerText) {
                if (subarray[j + 1].innerText === subarray[j + 2].innerText) {
                  if (subarray[j + 2].innerText === subarray[j + 3].innerText) {
                    winningPlayer = playerX
                    alert`X connected 4 horizontally`
                    winningActions()
                    //HELP how do I call a method?
                    // refreshBoard()
                    // connectFour.refreshBoard(board)
                    // connectFour.refreshBoard()
                    // playAgain()
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
            squares[r + 1].children[c] &&
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
                    alert`X connected 4 vertically`
                    message.innerHTML = `3 seconds to place your token in the scoreboard`
                    result.innerHTML = `4 connected`
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
                    alert`O connected 4 vertically`
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
            currentCell.innerText &&
            squares[i + 1].children[j + 1] &&
            //actual connection
            currentCell.innerText === squares[i + 1].children[j + 1].innerText
          ) {
            if (squares[i + 1].children[j + 1].innerText === `X`) {
              diagOneCrossesCounter++
              console.log(
                diagOneCrossesCounter,
                squares[i + 1].children[j + 1].innerText
              )
            }
            if (diagOneCrossesCounter === 4) {
              alert(`connected four diagonally`)
            } else {
              diagOneCrossesCounter = 1
            }

            if (squares[i + 1].children[j + 1].innerText === `O`) {
              diagOneNoughtsCounter++
              console.log(
                diagOneNoughtsCounter,
                squares[i + 1].children[j + 1].innerText
              )
            }
            if (diagOneNoughtsCounter === 4) {
              alert(`connected four diagonally`)
            } else {
              diagOneNoughtsCounter = 1
            }
            currentCell = squares[i + 1].children[i + 1]
            console.log(`diagonal matching`)
          }

          if (
            squares[i - 1] &&
            currentCell.innerText &&
            squares[i - 1].children[j + 1] &&
            currentCell.innerText === squares[i - 1].children[j + 1].innerText
          ) {
            if (
              squares[i - 1].children[j - 1] &&
              squares[i - 1].children[j - 1].innerText === `O`
            ) {
              diagOneCrossesCounter++
              console.log(
                diagOneCrossesCounter,
                squares[i - 1].children[j - 1].innerText
              )
            }

            if (diagOneCrossesCounter === 4) {
              alert(`connected four diagonally`)
            } else {
              diagOneCrossesCounter = 1
            }

            if (squares[i - 1].children[j - 1].innerText === `O`) {
              diagOneNoughtsCounter++
              console.log(
                diagOneNoughtsCounter,
                squares[i - 1].children[j - 1].innerText
              )
            }
            if (diagOneNoughtsCounter === 4) {
              alert(`connected four diagonally`)
            } else {
              diagOneNoughtsCounter = 1
            }
            currentCell = squares[i - 1].children[i - 1]
            console.log(`end diagonal matching`)
          }
          // {
          //   if (subarray[j].innerText === 'X') {
          //     if (squares[2].children[0]) {
          //       squares[i + 1].children[j + 1]
          //       diagOneCrossesCounter++
          //       if (squares[i + 1].children[j + 1]) {
          //         squares[i + 2].children[j + 2]
          //         diagOneCrossesCounter++
          //         if (squares[i + 2].children[j + 2]) {
          //           squares[i + 3].children[j + 3]
          //           diagOneCrossesCounter++
          //           if (diagOneCrossesCounter === 4) {
          //             alert`O connected 4 vertically`
          //           } else return
          //         }
          //       }
          //       console.log(diagOneCrossesCounter)
          //     }
          //   } else if (subarray[j].innerText === 'O') {
          //     if (squares[2].children[0]) {
          //       squares[i + 1].children[j + 1]
          //       if (squares[i + 1].children[j + 1]) {
          //         squares[i + 2].children[j + 2]
          //         if (squares[i + 2].children[j + 2]) {
          //           squares[i + 3].children[j + 3]
          //         }
          //       }
          //     }
          //   }
          // }

          //   if (subarray[j].innerText === 'X') {
          //     if (squares[1].children[0]) {
          //       squares[i + 1].children[j + 1]
          //       diagOneCrossesCounter++
          //       if (squares[i + 1].children[j + 1]) {
          //         squares[i + 2].children[j + 2]
          //         diagOneCrossesCounter++
          //         if (squares[i + 2].children[j + 2]) {
          //           squares[i + 3].children[j + 3]
          //           diagOneCrossesCounter++
          //           if (squares[i + 3].children[j + 3]) {
          //             squares[i + 4].children[j + 4]
          //             diagOneCrossesCounter++
          //           }
          //           if (diagOneCrossesCounter === 4) {
          //             alert`O connected 4 diagonally top left`
          //           } else return
          //         }
          //       }
          //       console.log(diagOneCrossesCounter)
          //     }
          //   } else if (subarray[j].innerText === 'O') {
          //     if (squares[1].children[0]) {
          //       squares[i + 1].children[j + 1]
          //       diagOneNoughtsCounter++
          //       if (squares[i + 1].children[j + 1]) {
          //         squares[i + 2].children[j + 2]
          //         diagOneNoughtsCounter++
          //         if (squares[i + 2].children[j + 2]) {
          //           squares[i + 3].children[j + 3]
          //           diagOneNoughtsCounter++
          //           if (squares[i + 3].children[j + 3]) {
          //             squares[i + 4].children[j + 4]
          //             diagOneNoughtsCounter++
          //           }
          //           if (diagOneNoughtsCounter === 4) {
          //             alert`O connected 4 diagonally top left`
          //           } else return
          //         }
          //       }
          //       console.log(diagOneCrossesCounter)
          //     }
          //   }
        }
      }
    }
    checkForDiagOne()
  }
}
/// this is the end of the class

let connectFour = new GameBoard(squares)

let board = connectFour.board

// GAME LOGIC
for (let i = 0; i < squares.length; i++) {
  //why are we using .children instead of .length?
  let subarray = squares[i].children
  for (let j = 0; j < subarray.length; j++) {
    // console.log(subarray[j].tagName)
    subarray[j].addEventListener('click', () => {
      if (squares[i].id === 'row5') {
        if (currentPlayer === playerX) {
          subarray[j].classList.add('xSquare')
          subarray[j].innerHTML = currentPlayer
          currentPlayer = playerO
          displayCurrentPlayer.innerHTML = currentPlayer
          document.getElementById(
            'message'
          ).innerHTML = `<span id="current-player"></span>`
        } else {
          subarray[j].classList.add('oSquare')
          subarray[j].innerHTML = currentPlayer
          currentPlayer = playerX
          displayCurrentPlayer.innerHTML = currentPlayer
        }
      } else if (
        squares[i + 1].children[j].innerText &&
        currentPlayer === playerX
      ) {
        subarray[j].classList.add('xSquare')
        subarray[j].innerHTML = currentPlayer
        currentPlayer = playerO
        displayCurrentPlayer.innerHTML = currentPlayer
      } else if (
        squares[i + 1].children[j].innerText &&
        currentPlayer === playerO
      ) {
        subarray[j].classList.add('oSquare')
        subarray[j].innerHTML = currentPlayer
        currentPlayer = playerX
        displayCurrentPlayer.innerHTML = currentPlayer
      } else {
        alert(`invalid move`)
      }
      connectFour.checkForWinner()
    })

    const playAgain = () => {
      console.log('reset clicked')
      subarray[j].classList.remove('xSquare')
      subarray[j].classList.remove('oSquare')
      subarray[j].innerText = ''
      displayCurrentPlayer.style.display = `inline`
    }
    reset.addEventListener('click', playAgain)
    // reset.addEventListener('click', connectFour.refreshBoard())
  }
}

// for (let i = 0; i < sb1squares.length; i++) {
//   sb1squares[i].addEventListener(
//     'click',
//     () => {
//       if (sb1squares[i].id === 'sb1-col-row1') {
//         if (winningPlayer === playerX) {
//           sb1squares[i].classList.add('xSquare')
//           sb1squares[i].innerHTML = winningPlayer
//         }
//       } else if (sb1squares[i + 1].innerText === playerX) {
//         sb1squares[i].classList.add('xSquare')
//         sb1squares[i].innerHTML = winningPlayer
//       }
//     },
//     { once: true }
//   )
// }

// for (let i = 0; i < sb2squares.length; i++) {
//   sb2squares[i].addEventListener('click', () => {
//     if (sb2squares[i].id === 'sb2-col-row1') {
//       if (winningPlayer === playerO) {
//         sb2squares[i].classList.add('oSquare')
//         sb2squares[i].innerHTML = winningPlayer
//       }
//     } else if (sb2squares[i + 1].innerText === playerO) {
//       sb2squares[i].classList.add('oSquare')
//       sb2squares[i].innerHTML = winningPlayer
//       alert`one at a time cowboy`
//       return
//     }
//   })
// }

//PSEUDO CODE FOR WINNING COMBINATIONS

// // DIAGONAL WIN CHECK (TOP LEFT - BOTTOM RIGHT)
//STARTING POINTS
/*
squares[2].children[0]
squares[1].children[0]
squares[0].children[0]
squares[0].children[1]
squares[0].children[2]
squares[0].children[3]
*/

// squares[2].children[0], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// squares[1].children[0], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// squares[0].children[0], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// squares[0].children[1], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// squares[0].children[2], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// squares[0].children[3], squares[i + 1].children[j+1], squares[i + 2].children[j+2], squares[i + 3].children[j+3]

// // DIAGONAL WIN CHECK (BOTTOM LEFT - TOP RIGHT)
//STARTING POINTS
/*
squares[0].children[3]
squares[0].children[4]
squares[0].children[5]
squares[0].children[6]
squares[1].children[6]
squares[2].children[6]
*/

// squares[0].children[3], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]

// squares[0].children[4], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]

// squares[0].children[5], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]

// squares[0].children[6], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]

// squares[1].children[6], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]

// squares[2].children[6], squares[i + 1].children[j-1], squares[i + 2].children[j-2], squares[i + 3].children[j-3]
