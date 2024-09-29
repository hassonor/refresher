for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);  // Output: 4, 4, 4
    }, 1000);
}

/**
 * This happens because the setTimeout function forms a closure over the variable i, which is shared across all iterations.
 * By the time the callbacks execute, i has already reached 4.
 * Solution: Use let instead of var, or use an IIFE (Immediately Invoked Function Expression)
 * to capture the current value of i.
 */

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);  // Output: 1, 2, 3
    }, 1000);
}