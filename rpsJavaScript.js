// Global Variables

let humanScore = 0
let computerScore = 0

// Array ordered with the choice and then next is what it wins against
const rules = ["Rock", "Scissors", "Paper", "Rock", "Scissors", "Paper"] 




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

    } else{

        // code to call a check state and return what pairing is followed by result
        // first return index number of player choice
        let indexNumber = getChoiceInIndex(humanChoice)
        // check computer choice against index number + 1
        if(computerChoice == rules[indexNumber]){
            win = true
        } else {
            win = false
        }

    }

    if(draw == true){
        winMessage = "You Draw"
        drawOrBeats = " draws with "
        winningChoice = humanChoice
        losingChoice = computerChoice

    } else if (win == true) {
        winMessage ="You Win!"
        drawOrBeats = " beats "
        winningChoice = humanChoice
        losingChoice = computerChoice
        humanScore += 1
    } else { 
        winMessage ="You Lose!"
        drawOrBeats = " beats "
        winningChoice = computerChoice
        losingChoice = humanChoice
        computerScore += 1
    }

    return winMessage + " " + winningChoice + drawOrBeats + losingChoice

}


function displayScore(final){

    let extraMessage =""
    if(final == true){
        extraMessage = "Final "
    }
    let message = "The " + extraMessage + "Player Score is: " + humanScore + ". The " + extraMessage + "Computer Score is: " + computerScore + "."
    return message
}

// find out what choice is in terms of array index location
function getChoiceInIndex(choice){

    let foundChoice
    let indexCounter = 0

    while (foundChoice = false)
    {

        if(choice = rules[indexCounter]){
            foundChoice = true
        } else
        {
            indexCounter += 2
        }


    }

    return indexCounter

}

function displayRound(round, noOfRounds){

    return "The round is " + round + " out of " + noOfRounds

}

// Code to play 5 rounds

function playGame(){

    const noOfRounds = 5
    // No Of Rounds Loop
    for (let i =1; i <= noOfRounds; i++){

        console.log(displayRound(i, noOfRounds))
        console.log(displayScore(false))
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        console.log(playRound(humanChoice, computerChoice))
        

    }



}
console.log(playGame())