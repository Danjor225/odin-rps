function getComputerChoice()
{
    let randomChoice = Math.random()
    if(randomChoice <= 0.3){
        return "Rock"
    } else if (randomChoice >= 0.6) {
        return "Paper"

    } else{
        return "Scissors"
    }

};

