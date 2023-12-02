// My code with a little help:


// let pScore = 0;
// let cScore = 0;
// let winner = "";





// function playRound(playerSelection, computerSelection) {
// 	if (playerSelection === computerSelection );{
// 	winner = "Tie!"}
	
// 	if ((computerSelection === "rock" && playerSelection.toLowerCase() === "paper") ||
//         (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") ||
//         (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock"))
// 	 {
// 	  pScore++
// 	  winner = "Player"

// 	} if (
// 	   (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
// 	   (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
// 	   (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")
// 	   ) {
// 		cScore++
// 		winner = "Computer";
// 	   }
    


// function getComputerChoice () {
// 	const items = ["rock","paper","scissors"];
// 	const randomIndex = Math.floor(Math.random() *items.length);
// 	const randomlySelectedItem = items[randomIndex];
// 	return randomlySelectedItem;	
	
// }

//       const playerSelection = ("rock", "paper", "scissors") ;
//       const computerSelection = getComputerChoice();
//       console.log(playRound(playerSelection.toLowerCase(), computerSelection));

//       let answer = prompt("Enter your tool");


//       Computer generated Code (see ChatGPT - tech learning journey)

//       let pScore = 0;
//       let cScore = 0;
      
//       function playRound(playerSelection, computerSelection) {
// 	  let winner = "";
      
// 	  if (playerSelection === computerSelection) {
// 	      winner = "Tie!";
// 	  }
      
// 	  if (
// 	      (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") ||
// 	      (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") ||
// 	      (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock")
// 	  ) {
// 	      pScore++;
// 	      winner = "Player";
// 	  }
      
// 	  if (
// 	      (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
// 	      (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
// 	      (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")
// 	  ) {
// 	      cScore++;
// 	      winner = "Computer";
// 	  }
      
// 	  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, Winner: ${winner}`);
// 	  console.log(`Player Score: ${pScore}, Computer Score: ${cScore}`);
      
// 	  return winner;
//       }
      
//       function getComputerChoice() {
// 	  const items = ["rock", "paper", "scissors"];
// 	  const randomIndex = Math.floor(Math.random() * items.length);
// 	  const randomlySelectedItem = items[randomIndex];
// 	  return randomlySelectedItem;
//       }
      
//       function gameLoop() {
// 	  let roundsToPlay = 5; // Change this to the number of rounds you want to play
      
// 	  while (roundsToPlay > 0) {
// 	      const playerSelection = prompt("Enter your tool (rock, paper, scissors)").toLowerCase();
// 	      const computerSelection = getComputerChoice();
// 	      const roundWinner = playRound(playerSelection, computerSelection);
      
// 	      if (roundWinner !== "Tie!") {
// 		  roundsToPlay--;
// 	      }
// 	  }
      
// 	  console.log("Game Over!");
//       }
      
//       // Start the game loop
//       gameLoop();
      



// MY CODE IS DOWN HERE|||||||

// let pScore = 0;
// let cScore = 0;
// let winner = ""
//     const buttons = document.querySelectorAll('input');



// function getComputerChoice() {
// 	const items = ['rock', 'paper', 'scissors'];
// 	const randomIndex = Math.floor(Math.random() *items.length )
// 	const randomlySelectedItem = items[randomIndex]
// 	return randomlySelectedItem;
	

// }


// function singleRound (playerSelection , computerSelection) {

// 	if (playerSelection === computerSelection)
// 	{
// 	winner = "Tie"}

// 	{if (
// 	   playerSelection === "rock" && computerSelection === "scissors" ||
// 	   playerSelection === "scissors" && computerSelection === "paper" ||
// 	   playerSelection === "paper" && computerSelection === "rock")
// 	   pScore++
// 	   winner = "Player"
	   
// 	} {if (
	
// 	computerSelection === "rock" && playerSelection === "scissors" ||
// 	computerSelection === "scissors" && playerSelection === "paper" ||
// 	computerSelection === "paper" && playerSelection === "rock")
// 	pScore++
// 	winner = "Computer"
	
// 	}

// }	

// 	function gameOver() {
// 		return pScore === 5 || cScore === 5;
// 	}


// 	const rockButton = document.getElementById('rocky');
// 	const paperButton = document.getElementById('papery');
// 	const scissorsButton = document.getElementById('scissorsy');

// 	rockButton.addEventListener('click', () => singleRound('rock'));
// 	paperButton.addEventListener('click', () => singleRound('paper'));
// 	scissorsButton.addEventListener('click', () => singleRound('scissors'));

    
//     document.getElementById('result').innerText = ` Player: ${pScore}, Computer: ${cScore}, Winner: ${winner}`;

//     buttons.forEach(button => {
// 	button.addEventListener('click', function(){
// 	    singleRound(button.value);
// 	});
//     });
    
// MY CODE IS UP THERE |||||||||

//     let playerScore = 0;
//     let computerScore = 0;
//     const buttons = document.querySelectorAll('input');
    
//     function computerPlay() {
// 	let choices = ['rock', 'paper', 'scissors'];
// 	return choices[Math.floor(Math.random() * choices.length)];
//     }
    
//     function disableButtons() {
// 	buttons.forEach(elem => {
// 	    elem.disabled = true;
// 	});
//     }
    
//     function playRound(playerSelection) {
// 	let computerSelection = computerPlay();
// 	let result = "";
    
// 	if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
// 	    (playerSelection === 'scissors' && computerSelection === 'paper') ||
// 	    (playerSelection === 'paper' && computerSelection === 'rock')) {
    
// 	    playerScore += 1;
// 	    result = (`You win! ${playerSelection} beats ${computerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
    
// 	    if (playerScore === 5) {
// 		result += '<br><br>You won the game! Reload the page to play again';
// 		disableButtons();
// 	    }
// 	} else if (playerSelection === computerSelection) {
// 	    result = (`It's a tie. You both chose ${playerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
// 	} else {
// 	    computerScore += 1;
// 	    result = (`You lose! ${computerSelection} beats ${playerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
    
// 	    if (computerScore === 5) {
// 		result += '<br><br>I won the game! Reload the page to play again';
// 		disableButtons();
// 	    }
// 	}
    
// 	document.getElementById('result').innerHTML = result;
// 	return;
//     }
    
//     buttons.forEach(button => {
// 	button.addEventListener('click', function () {
// 	    playRound(button.value);
// 	});
//     });
    



let pScore=0
let cScore=0
let winner=""


const buttons = document.querySelectorAll('input')

// Game:


function getComputerChoice () {
	const items = ['Rock','Paper','Scissors']
	const randomIndex = Math.floor(Math.random() * items.length);
	const randomlySelectedItem = items[randomIndex];
	return randomlySelectedItem;
}

function round(pSelection, cSelection) {
	if (pSelection === cSelection) {
	winner = 'Tie';
	}else if (
	(pSelection === "Rock" && cSelection === "Scissors") ||
	(pSelection === "Paper" && cSelection === "Rock") ||
	(pSelection === "Scissors" && cSelection === "Paper")
	) {
		pScore++
		winner = "Player";
	} else {
		cScore++
		winner = "Computer"
	}



document.getElementById('result').innerText = ` Player: ${pScore},Computer: ${cScore}, Winner:${winner} `

if (pScore === 5 || cScore === 5) {
	disableButtons();
	let playAgain = prompt("Do you want to play again?");
	let iDo = "yes"
	if (playAgain.toLowerCase() === iDo){
	pScore = 0;
	cScore = 0;
	enableButtons()
	round()

	} else {
		disableButtons();
	}
}}

buttons.forEach(button => {
	button.addEventListener('click', () => round(button.value,getComputerChoice()));

});

function disableButtons (){
	buttons.forEach(button => {
		button.disabled = true;
	});
}

function enableButtons() {
	buttons.forEach(button =>
	button.disabled = false	)
}