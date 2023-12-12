//question no 17;

// Function to perform the calculation based on user input
function calculateResult(firstNumber, secondNumber, operation) {
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Invalid input. Please enter valid numbers.";
    }

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                return "Cannot divide by zero.";
            }
            break;
        case "%":
            if (secondNumber !== 0) {
                result = firstNumber % secondNumber;
            } else {
                return "Cannot calculate modulus with zero.";
            }
            break;
        default:
            return "Invalid operation. Please enter +, -, *, /, or %.";
    }

    return `Result: ${result}`;
}

// Example usage with user input
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result = calculateResult(firstNumber, secondNumber, operation);
alert(result);
