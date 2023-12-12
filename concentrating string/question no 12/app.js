//question no 12

let username = prompt("Enter a number:");
let parsedNumber= parseFloat(username);
if (isNaN(parsedNumber)) {
    alert("Please enter a valid number.");
} else if (parsedNumber % 3 === 0) {
    alert(`${parsedNumber} is divisible by 3.`);
} else {
    alert(`${parsedNumber} is not divisible by 3.`);
}
