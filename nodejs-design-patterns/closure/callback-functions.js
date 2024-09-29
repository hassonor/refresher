//   Closures are ofter used in event handlers or callback function where you need to preserve some state.

function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting},${name}!`);
    }
}

const greetHello = createGreeter('Hello');
greetHello('Alice'); // Output: 'Hello, Alice!'

// The greeting is "closed over" by the inner function, allowing the returned function to use it when called