//question no 22

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    // Convert the input to a number
    const number = parseFloat(input);

    // Check if the number is positive, negative, or zero
    if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
    } else if (number > 0) {
        console.log('The number is positive.');
    } else if (number < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The number is zero.');
    }

    rl.close();
});
