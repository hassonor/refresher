const myPromise = new Promise(function (resolve, reject) {
    resolve('Hello world');
});

myPromise.then(value => {
    console.log('This is inside the onFulfilled function');
})

console.log('This is written after my Promise.then');


const myPromiseWithCatch = new Promise(function (resolve, reject) {
    reject('Something went wrong');  // This promise is rejected
});

myPromiseWithCatch
    .then(value => {
        console.log('This will not run because the promise is rejected');
    })
    .catch(error => {
        console.log('Caught error:', error);  // Logs 'Something went wrong'
    });

console.log('This is written after myPromiseWithCatch');


const chainedPromise = new Promise(function (resolve, reject) {
    resolve(10);  // The promise is resolved with the value 10
});

chainedPromise
    .then(value => {
        console.log('First then:', value);  // Logs '10'
        return value * 2;  // Returns 20 to the next `then()`
    })
    .then(value => {
        console.log('Second then:', value);  // Logs '20'
        return value + 5;  // Returns 25 to the next `then()`
    })
    .then(value => {
        console.log('Third then:', value);  // Logs '25'
    });

const myPromiseWithFinally = new Promise(function (resolve, reject) {
    resolve('Success!');  // The promise resolves successfully
});

myPromiseWithFinally
    .then(value => {
        console.log('Fulfilled with:', value);  // Logs 'Success!'
    })
    .finally(() => {
        console.log('This runs regardless of promise resolution or rejection');  // Always runs
    });

const rejectedPromise = Promise.reject('Immediate rejection');

rejectedPromise
    .then(value => {
        console.log('This will not be called since the promise is rejected');
    })
    .catch(error => {
        console.log('Caught rejection:', error);  // Logs 'Immediate rejection'
    });


const delayedPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('This is resolved after 2 seconds');
    }, 2000);
});

delayedPromise
    .then(value => {
        console.log(value);  // Logs after 2 seconds
        return 'Chained value';
    })
    .then(value => {
        console.log('Chained value:', value);  // Logs 'Chained value'
    });
