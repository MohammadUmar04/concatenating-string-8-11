
    // Get user input for the color
    var signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):");

    // Convert the entered color to lowercase for case-insensitive comparison
    signalColor = signalColor.toLowerCase();

    // Check the color and display the appropriate message
    switch (signalColor) {
      case "red":
        alert("Stop! The signal is red.");
        break;
      case "yellow":
        alert("Be ready! The signal is about to change.");
        break;
      case "green":
        alert("Go! The signal is green.");
        break;
      default:
        alert("Invalid color entered. Please enter red, yellow, or green.");
    }
  
