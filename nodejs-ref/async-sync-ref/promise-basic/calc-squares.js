// Function to calculate the square of a number asynchronously
function calculateSquare(number) {
    // Create a new Promise
    const promise = new Promise(function (resolve, reject) {
        // Simulate a delay with setTimeout (800ms)
        setTimeout(function () {
            // If the argument is not a number, reject the promise with an error
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'))
            }
            // Otherwise, calculate the square of the number
            const result = number * number;
            // Resolve the promise with the result
            resolve(result);
        }, 800);
    });
    return promise; // Return the promise
}

// Example 1: Chaining two promises (first 1^2, then 2^2)
calculateSquare(1).then(value1 => {
    // Logs the result of calculateSquare(1)
    console.log(value1);  // Logs 1 (1^2)
    // Return a new promise to calculate square of 2
    return calculateSquare(2);
}).then(value2 => {
    // Logs the result of calculateSquare(2)
    console.log(value2);  // Logs 4 (2^2)
}, error => {
    // This will only catch errors from the second promise (calculateSquare(2)).
    // If calculateSquare(1) throws an error, it will not be caught here.
    console.log('Error: ' + error);
});

// Example 2: Using .catch() to handle errors (this is better practice)
calculateSquare(1).then(value1 => {
    // Logs the result of calculateSquare(1)
    console.log(value1);  // Logs 1 (1^2)
    // Return a new promise to calculate square of 2
    return calculateSquare(2);
})
    .then(value2 => {
        // Logs the result of calculateSquare(2)
        console.log(value2);  // Logs 4 (2^2)
    })
    .catch(error => {
        // If any promise in the chain fails, it will be caught here
        console.log('Error: ' + error);
    });

// Uncomment these examples to test success and error cases
// calculateSquare(2).then(value => {
//     // Logs success case for calculateSquare(2)
//     console.log('Success: ' + value);  // Logs 4
// }, error => {
//     // Logs error if the input is invalid
//     console.log('Error: ' + error);
// })

// calculateSquare('2').then(value => {
//     // This will not run as '2' is not a number
//     console.log('Success: ' + value);
// }, error => {
//     // Logs error for invalid input
//     console.log('Error: ' + error);  // Logs error message
// })
