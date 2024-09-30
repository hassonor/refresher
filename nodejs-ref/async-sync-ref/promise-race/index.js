// Function to simulate asking Or for a pen
// Returns a promise that resolves after 3 seconds with a success message
const askOr = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);  // Resolves after 3 seconds
    });
}

// Function to simulate asking Moshe for a pen
// Returns a promise that rejects after 1 second with a failure message
const askMoshe = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 1000);  // Rejects after 1 second
    });
}

// Function to simulate asking David for a pen
// Returns a promise that resolves after 2 seconds with a success message
const askDavid = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you.'), 2000);  // Resolves after 2 seconds
    });
}

// Promise.race() takes an array of promises and returns the result of the first promise that resolves or rejects
Promise.race([askOr(), askMoshe(), askDavid()])
    .then(value => {
        // Logs the resolved value of the first completed promise
        console.log(value);  // Logs the success message from the fastest resolving promise
    })
    .catch(error => {
        // Logs the error if the first completed promise is a rejection
        console.log(error);  // Logs the error message from the fastest rejecting promise
    });
