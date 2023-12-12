
//question no 2

function displayMultiplicationTable() {
    // Get user input
    var userInput = prompt("Enter a number for the multiplication table:");

    // Use default value (5) if the user doesn't enter a number
    var number = userInput? parseInt(userInput) : 5;

    // Display the multiplication table in the browser
    var tableHTML = "<h2>Multiplication Table for " + number + "</h2><ul>";
    for (var i = 1; i <= 10; i++) {
      tableHTML += "<li>" + number + " * " + i + " = " + (number * i) + "</li>";
    }
    tableHTML += "</ul>";

    // Display the table in the body of the HTML document
    document.body.innerHTML = tableHTML;
  }

  // Call the function when the page loads
  displayMultiplicationTable();
