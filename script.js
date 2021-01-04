//changing between sections 

const intro = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')

const sections = [intro, second, third, fourth]

intro.style.display = "block";
second.style.display= "none";
third.style.display= "none";
fourth.style.display = "none";

const btns = document.querySelectorAll('.btn');
const bbtns = document.querySelectorAll('.btn-back')


for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener('click', function () {
         goForward();
    	})
 };

for (let i = 0; i < bbtns.length; i++) {
bbtns[i].addEventListener('click', function () {
 		goBackward();
 	})
 };

function goForward(){
    for (let i=0; i<sections.length; i++){
        if (i < sections.length-1){
            if (sections[i].style.display != "none"){
                sections[i+1].style.display = "block";
                sections[i].style.display = "none";
                return;
            }
        } else {
            sections[i].style.display = "none";
            sections[0].style.display = "block";
            
            return
        }
    }
  };

function goBackward(){
    for (let i = 0; i < sections.length; i++){
        if (i > 1){
            if (sections[i].style.display != "none"){
                sections[i].style.display = "none";
                sections[i-1].style.display = "block";
                return
            }
        } else 
            if (sections[i].style.display != "none"){
                sections[i].style.display = "none";
                sections[i-1].style.display = "block";
                return
            }
    }
};



//rock-paper-scissors-game

const choice = ['rock', 'paper', 'scissors'];

//function computerPlay will generate computer's choice. 
computerPlay = () => choice[Math.floor(Math.random() * 3)];

//declare global variables
let computerScore = 0;
let playerScore = 0;
let rounds = 0;
let playerSelection 
let winner 
let computerSelection

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection;
        if (playerSelection == computerSelection){
            return 
        } 
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            return computerScore
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore++;
            return playerScore;
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore++;
            return playerScore;
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            return computerScore
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore++;
            return computerScore
        } else {
            playerScore++;
            return playerScore;
        }
    }

function newRound() {
// if three rounds have been played 
    if (rounds >= 3){
        updateTable();
        rounds = 0;
        if (playerScore > computerScore){
            winner = "Congratulations! You win!"
            declareWinner();
        } else if (computerScore > playerScore){
            winner = "Saki Wins."
            declareWinner(); 
            } else {
            winner = "It's a Draw."
            declareWinner();
            };
    updateTable();
    playerScore = 0;
    computerScore = 0;
    } else {  
        computerSelection = computerPlay();
        compChoiceButton();
        playRound(playerSelection, computerSelection);
        updateTable();
        }
    };

//Update which round on
function updateRound(){
    const myObj = document.getElementById("theround");
    myObj.innerHTML = "Round " + rounds;
};

//Update the score in the table 
function updateTable() {
    const pscore = document.getElementById("player-score"); 
    pscore.innerHTML = playerScore;
    const sscore = document.getElementById("saki-score");
    sscore.innerHTML = computerScore;
}

function playAgain() {
    //remove popup
    const deletePopUp = document.getElementById('winner-container')
    deletePopUp.remove();
    //reset scores
    updateTable();
    //reset button background
    const buttonsComp = document.querySelectorAll('.compImage');
    const buttonsPlayer = document.querySelectorAll('.iconImage');
    buttonsComp.forEach((button) => { 
        button.style.backgroundColor = 'transparent'
    });
    buttonsPlayer.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    });
};

    function declareWinner(){
    //declares winner, if winner from previous round already declares deletes winner
        if(document.getElementById("winner")){
            const element = document.getElementById("winner");
            element.remove();
        }
        //create popup box with new instructions
        const declaration = document.querySelector('#first');
        const div = document.createElement('div');
        div.setAttribute('id','winner-container');

        const p = document.createElement('p');
        p.setAttribute('id', 'winner-text')

        declaration.appendChild(div);
        div.appendChild(p)
        p.textContent = `${winner}`; 
        
        if(winner == "Saki Wins." || winner == "It's a Draw."){
            //create buttons 
            const backGame = document.createElement("BUTTON");
            //button to play again
            backGame.textContent = "Play Again?";
            backGame.setAttribute('class', 'popup-buttons')
            backGame.setAttribute('id', 'playAgain')
            div.appendChild(backGame);
            document.getElementById('playAgain').addEventListener("click", playAgain);   
        } else {
            const toApplication = document.createElement("BUTTON");
            // button to go on to app
            toApplication.textContent = "Go to Application";
            toApplication.setAttribute('class', 'popup-buttons')
            toApplication.setAttribute('id', 'toApp')
            div.appendChild(toApplication);
            document.getElementById("toApp").addEventListener("click", goForward)
        }
        
    }

    function removeWinner(){
        if(document.getElementById("winner")){
            const element = document.getElementById("winner");
            element.remove();
        };
    }


//change comp color
function compChoiceButton(){
    const buttons = document.querySelectorAll('.compImage');
    buttons.forEach((button) => {
        //if buttons' id = computerchoice then
        if (button.getAttribute('id') == computerSelection) {
            button.style.backgroundColor = 'yellow';
        } else{
            button.style.backgroundColor = 'transparent';
        }
    });
};

 //event listener for user click - which initiates a game 
 const buttons = document.querySelectorAll('.iconImage');

 //changing color of buttons 
 buttons.forEach((button) => {
     button.addEventListener('click', (e) => {
         buttons.forEach((button) => {
                 button.style.backgroundColor = 'transparent'
             })
             e.target.style.background = 'blue';
     });
 });

 //game
 buttons.forEach((button) => {
     button.addEventListener('click', () => {
     playerSelection = button.id;
     rounds++;
     removeWinner();
     updateRound();
     newRound();
 });  
 });