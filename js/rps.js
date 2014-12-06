

window.onload = function() {
  
  	var rock = document.getElementById("rock");
  	var paper = document.getElementById("paper");
  	var scissors = document.getElementById("scissors");

	var yourChoice = null;
	var randomRPS = function() {
		var choice = Math.random();
		if (choice < 0.33) {
			document.getElementById("compAnswer").innerHTML = "Rock";
			return "rock";
		}
		else if (choice > 0.33 && choice < 0.66) {
			document.getElementById("compAnswer").innerHTML = "Paper";
			return "paper";
		}
		else {
			document.getElementById("compAnswer").innerHTML = "Scissors";
			return "scissors";
		}
	}

	

var result = function (yourChoice) {
	var computerChoice = randomRPS()
	if (yourChoice == computerChoice) {
		document.getElementById("finalanswer").innerHTML = "It's a tie!";
	}

	if (yourChoice == "rock") {
		
		if (computerChoice == "scissors") {
			document.getElementById("finalanswer").innerHTML =  "You win!";
		}
		else if (computerChoice == "paper") {
			document.getElementById("finalanswer").innerHTML = "You lose. Computer wins.";
		}
	}

	if (yourChoice == "paper") {
		if (computerChoice == "rock") {
			document.getElementById("finalanswer").innerHTML = "You win!";
		}
		else if (computerChoice == "scissors" ) {
			document.getElementById("finalanswer").innerHTML = "You lose. Computer wins.";
		}
	}

	if (yourChoice == "scissors") {
		if (computerChoice == "paper") {
			document.getElementById("finalanswer").innerHTML = "You win!";
		}
		else if (computerChoice == "rock") {
			document.getElementById("finalanswer").innerHTML = "You lose. Computer wins";
		}
	}
}
	rock.onclick = function() {
		result("rock");
	};
  	paper.onclick = function() {
  		result("paper");
  	};
  	scissors.onclick = function() {
  		result("scissors");
  	};


}

