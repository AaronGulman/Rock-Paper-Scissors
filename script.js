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
      





let pScore = 0;
let cScore = 0;
let winner = ""

function getComputerChoice() {
	const items = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() *items.length )
	const randomlySelectedItem = items[randomIndex]
	return randomlySelectedItem;

}


function singleRound (playerSelection , computerSelection) {

	if (playerSelection === computerSelection);{
	winner = "Tie"}

	{if (
	   playerSelection === "rock" && computerSelection === "scissors" ||
	   playerSelection === "scissors" && computerSelection === "paper" ||
	   playerSelection === "paper" && computerSelection === "rock")
	   pScore++
	   winner = "Player"
	   
	} {if (
	
	computerSelection === "rock" && playerSelection === "scissors" ||
	computerSelection === "rock" && playerSelection === "scissors" ||
	computerSelection === "rock" && playerSelection === "scissors")
	pScore++
	winner = "Computer"
	}

}	

	function gameOver() {
		return pScore === 5 || cScore === 5
	}


const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')

rockButton.addEventListener('click', () => pickWeapon('rock'));
paperButton.addEventListener('click', () => pickWeapon('paper'));
scissorsButton.addEventListener('click', () => pickWeapon('scissors'));


function pickWeapon(playerSelection) {
	if (gameOver()){
		return 
	}
}



