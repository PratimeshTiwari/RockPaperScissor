const totalScores = {computerScore : 0,playerScore : 0}


function getComputerChoice() {
  const rpsChoice = ['rock', 'paper', 'scissor']
  const randomChoice = Math.floor(Math.random() * 3)
  return rpsChoice[randomChoice]
}

function getResult(playerChoice, computerChoice) {
  let score,cscore;
  const lowerPlayerChoice = playerChoice.toLowerCase();
  const lowerComputerChoice = computerChoice.toLowerCase();

  if (lowerPlayerChoice === lowerComputerChoice) {
    score = 0
    cscore=0
  } else if (
    lowerPlayerChoice === 'rock' && lowerComputerChoice === 'scissors' ||
    lowerPlayerChoice === 'paper' && lowerComputerChoice === 'rock' ||
    lowerPlayerChoice === 'scissors' && lowerComputerChoice === 'paper'
  ) {
    score = 1
    cscore=-1
  } else {
    score = -1
    cscore=1
  }
//return score
  return { playerScore: score, computerScore: cscore };
}



function showResult(score,playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
  if(score == -1){
    resultDiv.innerText='You Lost'
  }
  else if(score == 0){
    resultDiv.innerText='You Tie'
  }
  else{
    resultDiv.innerText='You Won'
  }
  handsDiv.innerText=`P : ${playerChoice} vs C : ${computerChoice}`
  playerScoreDiv.innerText = `Your Score : ${totalScores['playerScore']}`
  computerScoreDiv.innerText = `Computer Score : ${totalScores['computerScore']}`
}


function onClickRPS(playerChoice) {
  // console.log(playerChoice)
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice,computerChoice)
  totalScores['playerScore']+=score['playerScore']
  totalScores['computerScore']+=score['computerScore']
  showResult(score,playerChoice,computerChoice)
  
  
}



function playGame() {
 const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(i=>{
    i.onclick = () => onClickRPS(i.value)
  })
  
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScores)
}


function endGame(totalScores) {
  totalScores['playerScore']=0
  totalScores['computerScore']=0

  
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')

  resultDiv.innerText = ''
  handsDiv.innerText=''
  playerScoreDiv.innerText = ''
  computerScoreDiv.innerText=''
  
}

playGame()