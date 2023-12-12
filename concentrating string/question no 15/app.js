//question no 15

// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage with user input
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseInt(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
    document.write("Invalid input. Please enter a valid number.");
} else {
    let result = checkEvenOrOdd(number);
    document.write(`${number} is ${result}.`);
}
