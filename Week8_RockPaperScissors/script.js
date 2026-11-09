// Rock Paper Scissors Game
// Dino Penko
// Week 8 Lab

// Store the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Store the emoji that matches each game choice
let emoji = {Rock: "🪨", Paper: "📄", Scissors: "✂️"};

// Function called when the player clicks a button
function playGame(playerChoice) {
	// Array containing all possible choices
    let choices = ["Rock", "Paper", "Scissors"];
    
	// Generate a random number between 0 and 2
	let randomNumber = Math.floor(Math.random() * 3);
	
	// Use the random number to select the computer choice
    let computerChoice = choices[randomNumber];
	
	// Variable that will store the result of the round
    let result;

	// Compare player choice with computer choice
    if (playerChoice === computerChoice) {
        result = "Draw!";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        result = "You Win!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        result = "You Win!";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }
	
	if (result === "You Win!") {
		playerScore++;
	}
	else if (result === "Computer Wins!") {
		computerScore++;
	}

	// Display updated scores on the webpage
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;

	// Determine which CSS class to use for colouring the result
	let cssClass = "";
	if (result === "You Win!") {
		cssClass = "win";
	}
	else if (result === "Computer Wins!") {
		cssClass = "lose";
	}
	else {
		cssClass = "draw";
	}

	 // Display the result of the current round
	document.getElementById("result").innerHTML =
		"<div class='" + cssClass + "'>" +
		"<h2>" + result + "</h2>" +
		"<p>🧑 You chose: <strong>" + emoji[playerChoice] + " " + playerChoice + "</strong></p>" +
		"<p>💻 Computer chose: <strong>" + emoji[computerChoice] + " " + computerChoice + "</strong></p>" +
		"</div>";
	
	// Check if the player has won the match
	if (playerScore >= 3) {
		alert("Congratulations! You won the match!");
		location.reload();
		return;
	}

	// Check if the computer has won the match
	if (computerScore >= 3) {
		alert("Computer wins the match!");
		location.reload();
		return;
	}
}