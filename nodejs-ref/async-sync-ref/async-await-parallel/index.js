function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNUmber1 is done');
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 1000);
    });
}

// This function will invoke both printNumber1 and printNumber2
// functions one after another.
async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log(number1, number2);
}

oneByOne()

// This function will invoke both printNumber1 and printNumber2
// function in parallel

async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const [number1, number2] = [await promise1, await promise2];
    console.log(number1, number2);
}

inParallel()


// Using Promise.all to run multiple promises in parallel and log results when all are done
async function usePromiseAll() {
    try {
        const results = await Promise.all([printNumber1(), printNumber2()]);  // Run both promises in parallel
        console.log('Results from Promise.all:', results);  // Logs both results in an array [1, 2]
    } catch (error) {
        console.log('Error caught in Promise.all:', error.message);
    }
}

usePromiseAll();  // Logs the results from both promises once they resolve