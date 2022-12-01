console.log('it works')

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

function setPlayerName() {
  var x = document.getElementById('p1name').value
  document.getElementById('message').innerHTML = `Welcome ${x}`
  document.getElementById('chips_choice').innerHTML = `Who else's playing?<br>
  Name: <input type="text" id="p2name" name="value" value="Player 2"><br>
  <button onclick="setBoard()">Let's play!</button><br>`
}

function setBoard() {
  var y = document.getElementById('p2name').value
  document.getElementById(
    'message'
  ).innerHTML = `You are also welcome,${y}<br>Let's do this!`
  document.getElementById('chips_choice').innerHTML = ``
  document.getElementById('playArea').style.display = 'flex'
}

const squares = document.querySelectorAll('.grid div')
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('current-player')

let currentPlayer = 1

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    squares[i].setAttribute('id', i)
    alert(`You've clicked square ` + i)
    console.log(squares)
    if (squares[i + 7].classList.contains('bottom')) {
      if (currentPlayer == 1) {
        squares[i].classList.add('bottom')
        squares[i].classList.add('player1')
        currentPlayer = 2
        displayCurrentPlayer.innerHTML = currentPlayer
      } else if (currentPlayer == 2) {
        squares[i].classList.add('bottom')
        squares[i].classList.add('player2')
        currentPlayer = 1
        displayCurrentPlayer.innerHTML = currentPlayer
      }
    } else alert('invalid move')
  }
  // console.log(onclick)
}
