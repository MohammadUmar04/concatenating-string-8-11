//question no 18;
// Get user input for the day name
let dayName = prompt("Enter the day name:");

// Convert the input to lowercase for case-insensitive comparison
dayName = dayName.toLowerCase();

// Check the day and provide the appropriate response
if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday") {
    document.write("It's a week day.");
} else if (dayName === "saturday") {
    document.write("It's weekend.");
} else if (dayName === "sunday") {
    document.write("Yay! It's a holiday.");
} else {
    document.write("Invalid day name. Please enter a valid day name.");
}
