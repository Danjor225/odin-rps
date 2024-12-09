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

console.log(getHumanChoice())
