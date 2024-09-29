# JavaScript Closures

Closures are a fundamental concept in JavaScript. They allow functions to access variables from their outer scope, even
after the outer function has returned. Closures are created every time a function is defined inside another function,
allowing the inner function to "remember" the outer function's variables.

## What is a Closure?

A **closure** is a combination of a function and the lexical environment within which that function was declared. It
allows the inner function to retain access to the variables of the outer function, even after the outer function has
completed its execution.

### Basic Example of a Closure

```javascript
function outerFunction() {
    let outerVariable = 'I am from the outer function!';

    function innerFunction() {
        console.log(outerVariable); // The inner function has access to outerVariable
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();  // Output: 'I am from the outer function!'
```

`outerFunction` defines a variable `outerVariable` and an `innerFunction` that has access to it. The closure
allows `innerFunction` to retain access to `outerVariable` even after `outerFunction` has returned.

## Use Cases of Closures

### 1. Private Variables (Encapsulation)

Closures can be used to simulate private variables, ensuring that they can't be accessed or modified outside the
function.

```javascript
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
```

`count` is encapsulated within the closure and can only be modified through the returned function.

### 2. Callback Functions

Closures are used in callbacks to "remember" the state at the time the callback was defined.

```javascript
function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const greetHello = createGreeter('Hello');
greetHello('Alice'); // Output: 'Hello, Alice!'
```

The `greeting` variable is "closed over" by the inner function, which uses it when called later.

## Common Pitfalls with Closures

### Loop with Closures

Closures in loops can sometimes lead to unexpected behavior when using `var` because the variable is shared across all
iterations.

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);  // Output: 4, 4, 4
    }, 1000);
}
```

**Explanation:** By the time the `setTimeout` callback executes, the value of `i` has already been updated to `4`.

#### Solution 1: Use `let`

```javascript
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);  // Output: 1, 2, 3
    }, 1000);
}
```

**Explanation:** Using `let` ensures that `i` is block-scoped, so each iteration retains its own value of `i`.

#### Solution 2: Use an Immediately Invoked Function Expression (IIFE)

```javascript
for (var i = 1; i <= 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);  // Output: 1, 2, 3
        }, 1000);
    })(i);
}
```

**Explanation:** The IIFE captures the current value of `i` and passes it into the function, preventing it from being
overwritten in the next iteration.

## Summary

- A closure is created when an inner function accesses variables from its outer scope, even after the outer function has
  returned.
- Closures are commonly used for creating private variables, handling callbacks, and managing asynchronous operations.
- Be mindful of closures in loops, as they can lead to unexpected behavior if not handled properly.

For more information on closures, check
the [MDN Documentation on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).
