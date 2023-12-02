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



document.getElementById('result').innerText = ` Player: ${pScore} Weapon: ${pSelection}
Computer: ${cScore} Weapon:${cSelection} 
Winner:${winner} `

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