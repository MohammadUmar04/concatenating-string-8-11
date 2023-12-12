//question no 11

secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get user's guess from the input field
    const userGuess = parseInt(document.getElementById("guessInput").value);

    // Check if the guess is correct or close enough
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer.");
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        alert("Close enough to the correct answer.");
    } else {
        alert(`Sorry, the correct answer was ${secretNumber}. Try again!`);
    }
}



