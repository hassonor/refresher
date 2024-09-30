// Function to simulate asking the first dealer for a price
// It returns a promise that resolves with a value (8000) after 3 seconds
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);  // Simulate a delay of 3 seconds before resolving
    });
}

// Function to simulate asking the second dealer for a price
// It returns a promise that resolves with a value (12000) after 5 seconds
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);  // Simulate a delay of 5 seconds before resolving
    });
}

// Function to simulate asking the third dealer for a price
// It returns a promise that resolves with a value (10000) after 8 seconds
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);  // Simulate a delay of 8 seconds before resolving
    });
}

// Execute all promises in parallel using Promise.all()
Promise.all([
    askFirstDealer().catch(error => error),   // First dealer's promise with error handling
    askSecondDealer().catch(error => error),  // Second dealer's promise with error handling
    askThirdDealer().catch(error => error)    // Third dealer's promise with error handling
])
    .then(prices => {
        // Print each resolved value after all promises are fulfilled
        console.log("First dealer price:", prices[0]); // Log the first dealer's price
        console.log("Second dealer price:", prices[1]); // Log the second dealer's price
        console.log("Third dealer price:", prices[2]); // Log the third dealer's price
    });