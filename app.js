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
  document.getElementById(
    'playArea'
  ).innerHTML = `<div id="score1" class="scoreboard">
  <div><p>Finish line</p></div>
  <ul id="p1column" class="sb-column">
    <div id="sb1-col-row10"></div>
    <div id="sb1-col-row9"></div>
    <div id="sb1-col-row8"></div>
    <div id="sb1-col-row7"></div>
    <div id="sb1-col-row6"></div>
    <div id="sb1-col-row5"></div>
    <div id="sb1-col-row4"></div>
    <div id="sb1-col-row3"></div>
    <div id="sb1-col-row2"></div>
    <div id="sb1-col-row1"></div>  
    </ul>
    <div><p>Start line</p></div>
  </div>
<div id="scoreboard" class="board">
<ul id="column1" class="column">
<div id="col1row6"></div>
<div id="col1row5"></div>
<div id="col1row4"></div>
<div id="col1row3"></div>
<div id="col1row2"></div>
<div id="col1row1"></div>  
</ul>
<ul id="column2" class="column">
<div id="col2row6"></div>
<div id="col2row5"></div>
<div id="col2row4"></div>
<div id="col2row3"></div>
<div id="col2row2"></div>
<div id="col2row1"></div>  
</ul>
<ul id="column3" class="column">
<div id="col3row6"></div>
<div id="col3row5"></div>
<div id="col3row4"></div>
<div id="col3row3"></div>
<div id="col3row2"></div>
<div id="col3row1"></div>  
</ul>
<ul id="column4" class="column">
<div id="col4row6"></div>
<div id="col4row5"></div>
<div id="col4row4"></div>
<div id="col4row3"></div>
<div id="col4row2"></div>
<div id="col4row1"></div>  
</ul>
<ul id="column5" class="column">
<div id="col5row6"></div>
<div id="col5row5"></div>
<div id="col5row4"></div>
<div id="col5row3"></div>
<div id="col5row2"></div>
<div id="col5row1"></div>  
</ul>
<ul id="column6" class="column">
<div id="col6row6"></div>
<div id="col6row5"></div>
<div id="col6row4"></div>
<div id="col6row3"></div>
<div id="col6row2"></div>
<div id="col6row1"></div>  
</ul>
<ul id="column7" class="column">
<div id="col7row6"></div>
<div id="col7row5"></div>
<div id="col7row4"></div>
<div id="col7row3"></div>
<div id="col7row2"></div>
<div id="col7row1"></div>  
</ul>
</div>

<div id="score2" class="scoreboard">
<div><p>Finish line</p></div>
<ul id="p2column" class="sb-column">
  <div id="sb2-col-row10"></div>
  <div id="sb2-col-row9"></div>
  <div id="sb2-col-row8"></div>
  <div id="sb2-col-row7"></div>
  <div id="sb2-col-row6"></div>
  <div id="sb2-col-row5"></div>
  <div id="sb2-col-row4"></div>
  <div id="sb2-col-row3"></div>
  <div id="sb2-col-row2"></div>
  <div id="sb2-col-row1"></div>  
  </ul>
<div><p>Start line</p></div>
</div>`
}
