// 12 hours
// Figuring out input validation and program states
// 3
// Managed to simplify my code by combining similar use cases
// Any ways to simplify it further?

//----------base

// Track number of times played
var numTimesPlayed = 0;
// Track the number of games won
var numGamesWon = 0;
// Track the number of games lost
var numGamesLost = 0;

var displayRecord = function(){
  return `<br> Number of times played: ${numTimesPlayed} <br> Number of games won: ${numGamesWon} <br> Number of games lost: ${numGamesLost}`
}

// Enter user name
var currentGameMode = 'please enter your user name to start';
var userName = '';

// Main code
var main = function (input){
  var myOutputValue = ''
  if (currentGameMode == 'please enter your user name to start'){
    userName = input;
    currentGameMode = 'start game';
    console.log(myOutputValue)
    return 'hello ' + userName + ', enter scissors, paper, or stone, to start game.';
  }
  console.log(myOutputValue)
  if (currentGameMode == 'start game'){
    numTimesPlayed += 1

  var programChoice = programRandom();
  console.log (programChoice)
  }
// If user enters scissors and computer generates paper, user wins
// If user enters paper and computer generates stone, user wins
// If user enters stone and computer generates scissors, user wins
  if (
    (input == 'scissors' && programChoice == 'paper') ||
    (input == 'paper' && programChoice == 'stone') ||
    (input == 'stone' && programChoice == 'scissors')
  ){
    numGamesWon += 1
    myOutputValue = `The computer chose ${programChoice}. <br> You chose ${input}. <br> You win! Congrats. 🥳 <br> <br> So far ${userName}, you've been winning ${numGamesWon}/${numTimesPlayed} games. <br> <br>`;
  }

// If user enters scissors and computer generates stone, user loses
// If user enters paper and computer generates scissors, user loses
// If user enters stone and computer generates paper, user loses
  if (
    (input == 'scissors' && programChoice == 'stone') ||
    (input == 'paper' && programChoice == 'scissors') ||
    (input == 'stone' && programChoice == 'paper')
  ){
    numGamesLost += 1
    myOutputValue = `The computer chose ${programChoice}. <br> You chose ${input}. <br> You lose! Bummer. 😮‍💨  <br> <br> So far ${userName}, you've been winning ${numGamesWon}/${numTimesPlayed} games. <br> <br>`;
  }

// Is user input = computer generated, its a draw
if (input == programChoice){
  myOutputValue = `The computer chose ${programChoice}. <br> You chose ${input}. </br>Its a draw! Great minds think alike 🤓 <br> <br> So far ${userName}, you've been winning ${numGamesWon}/${numTimesPlayed} games. <br> <br>`;
}

// Input validator
if (!(input == 'stone' || input == 'paper' || input == 'scissors')) {
  myOutputValue = 'Oops! Please enter either scissors, paper, or stone to start the game. <br>'
}

  return myOutputValue += displayRecord() + '<br>';
};

// create a function for computer to generate random numbers
var programRandom = function(){
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor (randomNumber);
  var sciPapSto = randomInteger + 1;
  var result = '';
  if (sciPapSto == 1) result = 'paper';
  if (sciPapSto == 2) result = 'stone';
  if (sciPapSto == 3) result = 'scissors'

return result;
}
