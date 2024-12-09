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

function checkHappy(choice){

    choice = convertChoice(choice)
    let happy = prompt("You have chosen " + choice + ". Are you happy with this choice? ", "Y / N")

    if(happy == "Y"){
        return true
    } else {
        return false
    }
}

let humanScore = 0
let computerScore = 0

function convertChoice(choice){

if(choice == "r"){
    return "Rock"
} else if (choice == "s"){
    return "Scissors"
} else {
    return "Rock"
}

}

function playRound(humanChoice, computerChoice)
{

    let win = true
    winMessage = "You Win"
    winningChoice = "Paper"
    losingChoice = "Rock"

    

     

    if(win == true){
        winMessage ="You Win!"
    } else {
        winMessage = "You Lose"
    }

    return winMessage + " " + winningChoice + " beats " + losingChoice

}

console.log(playRound("r", "p"))