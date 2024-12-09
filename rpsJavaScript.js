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
            validChoice = true
            
        } else {
            validChoice = false
            againMessage = "Please enter a valid option - r, p or s"
        }
    }
return humanChoice
    
    
}

let humanScore = 0
let computerScore = 0



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