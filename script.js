let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generates a random target number

const generateTarget = () => {
    let randomTarget = Math.floor(Math.random()*10);
    return randomTarget;
}
//console.log(`Target number ${generateTarget}`());

//calculates the difference between two numbers
const getAbsoluteDistance = (a, b) => Math.abs(a-b);

//this function compares the results 

const compareGuesses = (human, computer, target) => {

    if ((human<0) || (human > 9)){
        window.alert ('You\'ve lost for being a smartass! Next time, stay in the safe zone of 0 through 9!');
    }
    else if (getAbsoluteDistance(human,target) <= getAbsoluteDistance(computer,target)){
        return true;
    } else {
        return false;
    }
}
// test function compareguess
//console.log (compareGuesses(31,1,3))     

//update scores
const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
        
    }else{
        computerScore++;
    }
}
 //round count
 const advanceRound = () => {
     currentRoundNumber++;
 }

/* test score change
 updateScore('human');
 console.log(humanScore); // To confirm that this value increased by 1
 updateScore('computer');
 console.log(computerScore); // To confirm that this value increased by 1
 */