let playerWins = 0; // Variable to keep track of player wins
let computerWins = 0; // Variable to keep track of computer wins
let winOrLose; // Variable to keep track of a win or lose in a round of a game
let yesOrNo = "y"; // Variable to keep track of whether the player wants to play again
let evenOrOdd; // Variable to keep track of whether the player picked even or odd
let result; // Variable to keep track of whether the sum is even or odd
let num1; // One of the random numbers (1-4)
let num2; // One of the random numbers (1-4)
let sum; // The sum of the two random numbers (2-8)

let username = prompt("Welcome to Even/Odd. What is your name?"); // Prompt to collect the player's name

// While loop to keep the game running until the player doesn't want to play again
while(yesOrNo == "y"){

  // Prompt to collect the player's choice of even or odd
  evenOrOdd = prompt("Guess whether the sum of two random numbers is even or odd? (type 'even' or 'odd')\n(If this popped up right after the exact same prompt, press cancel)");

  evenOrOdd = evenOrOdd.toLowerCase(); // Convert the player's choice to lowercase for case-insensitive comparison

  // While loop to keep asking the player to choose even or odd until they enter a valid choice
  while(evenOrOdd != "even" && evenOrOdd != "odd"){

    evenOrOdd = prompt("Invalid input, please type a valid input. (type 'even' or 'odd')");
    
  }

  // Generated two random numbers (both 1-4) and adds them together
  num1 = Math.floor(Math.random() * 4) + 1;
  num2 = Math.floor(Math.random() * 4) + 1;
  sum = num1 + num2;

  // If/else statement to determine whether the player lost or won in a round of a game. If the player correctly guessed that the sum of two numbers was even/odd, they win. If not, they lose. Either result is recorded and added to the player's or computer's win count.
  if(sum % 2 == 0){

    result = "even";

    if(evenOrOdd == "even"){

      winOrLose = "win";
      playerWins++;
      
    }else{

      winOrLose = "lose";
      computerWins++;
      
    }
    
  }else{

    result = "odd";

    if(evenOrOdd == "even"){

      winOrLose = "lose";
      computerWins++;
      
    }else{

      winOrLose = "win";
      playerWins++;
      
    }
    
  }

    // Displays the result of the round of a game and the player's win/lose count. Also prompts the player if they want to play again.
    yesOrNo = prompt(username + ", you chose " + evenOrOdd + ", the sum was " + sum + " which is an " + result + " number, you " + winOrLose + "!\nThat's " + playerWins + " wins and " + computerWins + " losses!\nWould you like to play again? (y/n)");

    // Sets yesOrNo to lowercase for case-insensitive comparison
    yesOrNo = yesOrNo.toLowerCase();

    // While loop to keep asking the player if they want to play again until they enter a valid choice
    while(yesOrNo != "y" && yesOrNo != "n"){

      yesOrNo = prompt("Invalid input, please type a valid input. (y/n)");

    }

}