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
    let humanChoice = prompt("Enter Rock ('r'), Paper ('p') or Scissors ('s')", "r, p or s")

    if (humanChoice != "r" || "p" || "s"){
        return "Please enter a correct option"
    } else {
        return humanChoice
    }
    
}

console.log(getHumanChoice())
