const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
if(userInput==='rock' || userInput==='paper' || userInput==='scissors'){
  return userInput;
}else{
  return console.log('Error');
}
};
const getComputerChoice=()=>{
 let randomNumber= Math.floor(Math.random()*3);
 switch(randomNumber){
   case 0:
   return 'rock';
   case 1:
   return 'paper';
   case 2:
   return 'scissors';
 }
}
const determineWinner=(UserChoice,ComputerChoice)=>{
  if(UserChoice === ComputerChoice){
    return 'The game is a tie!';
  }
  if(UserChoice ==='rock'){
    if(ComputerChoice ==='paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }if (UserChoice === 'paper') {
  if (ComputerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (UserChoice === 'scissors') {
  if (ComputerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
const playGame=()=>{
const UserChoice=getUserChoice('rock');
const ComputerChoice= getComputerChoice();
console.log('You threw:'+UserChoice);
console.log('The computer threw:'+ComputerChoice);
console.log(determineWinner(UserChoice,ComputerChoice));
};
playGame();
