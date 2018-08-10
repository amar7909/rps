
var userName;
var myChoice;
var computerChoice;
var myScore = 0;
var computerScore = 0;

 function search(e) {
 	if (event.key === "Enter") {
 		userName = e.value;
 		var spaceMatch = /\s/g;
 		if ((userName === undefined) || (userName.match(spaceMatch))) {
			document.getElementById('overlay').style.visibility = "visible";
		} else {
			document.getElementById('overlay').style.visibility = "hidden";
			}

		document.getElementById('player-name').innerHTML = userName;	
 	}
 }

 function selectInput(mySelection) {
 	myChoice = mySelection;
 	var randomInput = ["rock", "paper", "scissors"];
 	computerChoice = randomInput[Math.floor(Math.random() * (3 - 0)) + 0];
 	document.getElementById('my-choice').innerHTML = myChoice;
 	document.getElementById('computer-choice').innerHTML = computerChoice;
 	
	

 	if ((myChoice === "rock" && computerChoice === "scissors") || (myChoice === "paper" && computerChoice === "rock") || (myChoice === "scissors" && computerChoice === "paper")) {
 		document.getElementById('result').innerHTML = "WIN";
 		document.getElementById('result').style.color = "#68ea68";
 		myScore++;
 		document.getElementById('my-score').innerHTML = myScore; 		
 	} else if ((myChoice === "rock" && computerChoice === "paper") || (myChoice === "paper" && computerChoice === "scissors") || (myChoice === "scissors" && computerChoice === "rock")) {
 		document.getElementById('result').innerHTML = "LOSE";
 		document.getElementById('result').style.color = "rgb(249, 44, 44)";
 		computerScore++;
 		document.getElementById('computer-score').innerHTML = computerScore;
 	} else {
 		document.getElementById('result').innerHTML = "TIE";
 		document.getElementById('result').style.color = "#fff";
 	}
 }

 function resetScore() {
 	myScore = 0;
 	computerScore = 0;
 	document.getElementById('my-score').innerHTML = myScore;
 	document.getElementById('computer-score').innerHTML = computerScore;
 	document.getElementById('my-choice').innerHTML = "your choice";
 	document.getElementById('computer-choice').innerHTML = "computer choice";
 	document.getElementById('result').innerHTML = "Result";
 	document.getElementById('result').style.color = "#fff";
 }

