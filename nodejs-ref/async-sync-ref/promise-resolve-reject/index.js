// Function that logs the resolved value of a promise to the console
// It takes a promise (somePromise) as input and logs the resolved value
function logToConsole(somePromise) {
    somePromise.then(value => console.log(value))  // Logs the resolved value of the promise
        .catch(error => console.log(error));  // Handles and logs any rejection or error
}

// A regular string value
const value = 'string';

// Creates a promise that resolves immediately with the given value ('string')
// This simulates a resolved promise
const promisifiedValue = Promise.resolve(value);

// Creates a promise that rejects immediately with a custom error message
// This simulates a rejected promise
const rejectedPromiseCustom = Promise.reject(new Error('Some Custom Error.'));

// Example usage:
logToConsole(promisifiedValue);  // Logs: 'string'
logToConsole(rejectedPromiseCustom);  // Logs: Error: Some Custom Error.
