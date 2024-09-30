/*
    Closures are ofter used to simulate private variables, especially when you want to limit access to certain data.
*/
function createCounter() {
    let count = 0; // Private variable

    return function () {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

/**
 * Here, the count variable is private, and only the returned function can modify it, thanks to the closure.
 */