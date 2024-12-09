// Global Variables

let humanScore = 0
let computerScore = 0
const rock = ["Rock", "Scissors"] 
const paper = ["Paper", "Rock"]
const scissors = ["Scissors", "Paper"]



// Randomly generates Rock Paper or Scissors
function getComputerChoice()
{
    let randomChoice = Math.random()
    if(randomChoice < 0.4){
        return "Rock"
    } else if (randomChoice > 0.6) {
        return "Paper"

    } else{
        return "Scissors"
    }

};

// Prompts user to choose rock paper scissors and check it is a valid input
function getHumanChoice(){
    let humanChoice
    let againMessage = "r, p or s"
    let validChoice = false
    while(validChoice === false){
         humanChoice = prompt("Enter Rock ('r'), Paper ('p') or Scissors ('s')", againMessage)
        if (humanChoice == 'r' || humanChoice == 'p' || humanChoice == 's'){
            if(checkHappy()) {
                validChoice = true
            } else {
                validChoice = false
                againMessage = "Please choose an option you are happy with"
            }
            
            
        } else {
            validChoice = false
            againMessage = "Please enter a valid option - r, p or s"
        }
    }

   

   return humanChoice
    
}

// Creates a check if happy prompt to confirm players choice
function checkHappy(choice){

    choice = convertChoice(choice)
    let happy = prompt("You have chosen " + choice + ". Are you happy with this choice? ", "Y / N")
    happy = happy.toUpperCase()
    if(happy == "Y"){
        return true
    } else {
        return false
    }
}


// Turns the single letter into the word
function convertChoice(choice){

if(choice == "r"){
    return "Rock"
} else if (choice == "s"){
    return "Scissors"
} else {
    return "Rock"
}

}



// Compares two inputs and works out who wins and increments score
function playRound(humanChoice, computerChoice)
{
    humanChoice = convertChoice(humanChoice)
    
    let win = true
    let winMessage = "You Win"
    let winningChoice = "Rock"
    let losingChoice = "Rock"
    let drawOrBeats = "You Draw"
    let draw = false

    if(humanChoice == computerChoice){
        draw = true

    }

     

    if(draw == true){
        winMessage = "You Draw"
        drawOrBeats = " draws "
    } else if (win == true) {
        winMessage ="You Win!"
        drawOrBeats = " beats "
    } else { 
        winMessage ="You Lose!"
        drawOrBeats = " beats "
    }

    return winMessage + " " + winningChoice + drawOrBeats + losingChoice

}
