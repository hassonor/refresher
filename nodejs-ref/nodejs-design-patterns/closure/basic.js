function outerFunction() {
    let outerVariable = 'I am from the outer function!';

    function innerFunction() {
        console.log(outerVariable); // The inner function has access to otherVaraible
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: 'I am from the outer function!'

/**
 - innerFunction form a closure over the variable outerVariable from outerFunction
 - Even though outerFunction has finished execution, innerFunction retains access to the outerVariable because of the closure.
 */