window.onload = function() {
  
  	var rock = document.getElementById("rock");
  	var paper = document.getElementById("paper");
  	var scissors = document.getElementById("scissors");
  	var backgroundMusic = new Audio("audio/blackmoorColossus.mp3");
	backgroundMusic.volume = 0.2;
	backgroundMusic.play();
  	var youWin = new Audio("audio/orchestra.wav");
  	var youLose = new Audio("audio/lose.wav");
  	var tie = new Audio("audio/tie.wav");
	var yourChoice = null;

	modalWin = new CreateModalPopUpObject();

	var modalWin = function myFunction() { 
    document.getElementById("youWin").showModal(); 
	} 

	var modalLose = function myFunction() { 
    document.getElementById("youLose").showModal(); 
	} 

	var randomRPS = function() {
		var choice = Math.random();
		if (choice < 0.33) {
			document.getElementById("rockComputer").style.display = "block";
			document.getElementById("paperComputer").style.display = "none";
			document.getElementById("scissorsComputer").style.display = "none";
			return "rock";
		}
		else if (choice > 0.33 && choice < 0.66) {
			document.getElementById("paperComputer").style.display = "block";
			document.getElementById("rockComputer").style.display = "none";
			document.getElementById("scissorsComputer").style.display = "none";
			return "paper";
		}
		else {
			document.getElementById("scissorsComputer").style.display = "block";
			document.getElementById("rockComputer").style.display = "none";
			document.getElementById("paperComputer").style.display = "none";
			return "scissors";
		}
	}

	

var result = function (yourChoice) {
	var computerChoice = randomRPS();
	if (yourChoice == computerChoice) {
		document.getElementById("finalanswer").innerHTML = "It's a Tie!";
		tie.play();
	}

	if (yourChoice == "rock") {
		
		if (computerChoice == "scissors") {
			document.getElementById("finalanswer").innerHTML =  "You Win!";
			youWin.play();
			if (document.getElementById("myScore").innerHTML = "10") {
				modalWin();
			}
			else if ( ) {
				scoreDiv = document.getElementById("myScore");
				scoreDiv.innerHTML ++;
			}		
		}
		else if (computerChoice == "paper") {
			document.getElementById("finalanswer").innerHTML = "Computer Wins";
			youLose.play();
			if (document.getElementById("enemyScore").innerHTML = "10") {
				modalLose();
			}
			else {
				scoreDiv = document.getElementById("enemyScore");
				scoreDiv.innerHTML ++;
			}	
		}
	}

	if (yourChoice == "paper") {
		if (computerChoice == "rock") {
			document.getElementById("finalanswer").innerHTML = "You Win!";
			youWin.play();
			if (document.getElementById("myScore").innerHTML = "10") {
				modalWin();
			}
			else {
				scoreDiv = document.getElementById("myScore");
				scoreDiv.innerHTML ++;
			}	
		}
		else if (computerChoice == "scissors" ) {
			document.getElementById("finalanswer").innerHTML = "Computer Wins";
			youLose.play();
			if (document.getElementById("enemyScore").innerHTML = "10") {
				modalLose();
			}
			else {
				scoreDiv = document.getElementById("enemyScore");
				scoreDiv.innerHTML ++;
			}	
		}
	}

	if (yourChoice == "scissors") {
		if (computerChoice == "paper") {
			document.getElementById("finalanswer").innerHTML = "You Win!";
			if (document.getElementById("myScore").innerHTML = "10") {
				modalWin();
			}
			else {
				scoreDiv = document.getElementById("myScore");
				scoreDiv.innerHTML ++;
			}	
		}
		else if (computerChoice == "rock") {
			document.getElementById("finalanswer").innerHTML = "Computer Wins";
			youLose.play();
			if (document.getElementById("enemyScore").innerHTML = "10") {
				modalLose();
			}
			else {
				scoreDiv = document.getElementById("enemyScore");
				scoreDiv.innerHTML ++;
			}	
		}
	}
};
	rock.onclick = function() {
		result("rock");
	};
  	paper.onclick = function() {
  		result("paper");
  	};
  	scissors.onclick = function() {
  		result("scissors");
  	};

};