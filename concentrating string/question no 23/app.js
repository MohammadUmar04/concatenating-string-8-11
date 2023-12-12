//question no 23

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pluralizeNoun(noun, number) {
    // Check if the number is not equal to 1, then pluralize the noun
    const pluralizedNoun = number !== 1 ? noun + 's' : noun;
    console.log(`${number} ${pluralizedNoun}`);
}

rl.question('Enter a noun: ', (noun) => {
    rl.question('Enter a number: ', (inputNumber) => {
        const number = parseInt(inputNumber);

        if (isNaN(number)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            pluralizeNoun(noun, number);
        }

        rl.close();
    });
});

// Example usage:
// Enter a noun: cat
// Enter a number: 3
// Output: 3 cats
