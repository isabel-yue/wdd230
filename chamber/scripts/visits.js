// Check if there's a previous visit date in localStorage
var previousVisitDate = localStorage.getItem('visitDate');

// Get the current date
var currentDate = new Date();

// If it's the first visit or no previous date is stored
if (!previousVisitDate) {
    // Display the "Welcome" message
    document.getElementById('visits').textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Convert the stored date from string to Date object
    previousVisitDate = new Date(previousVisitDate);

    // Calculate the time difference in milliseconds
    var timeDifference = currentDate - previousVisitDate;
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the appropriate message based on the time difference
    if (daysDifference === 1) {
        document.getElementById('visits').textContent = "You last visited 1 day ago.";
    } else if (daysDifference < 1) {
        document.getElementById('visits').textContent = "Back so soon! Awesome!";
    } else {
        document.getElementById('visits').textContent = "You last visited " + daysDifference + " days ago.";
    }
}

// Update the visit date in localStorage for the next visit
localStorage.setItem('visitDate', currentDate);