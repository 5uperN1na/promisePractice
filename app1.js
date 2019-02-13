let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    setTimeout(() => {
        resolve('Success!'); // Yay!
    }, 1000);
});

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log('Yay! ' + successMessage);
}, (err) => {
    // will not get called for obvious reasons but err will be whatever is passed into the reject(...) function
    console.log('Nay! ' + err);
}).catch((err) => {
    // Since we're catching the error as well in the .then, this will
    // only fire if there is an error in either the onFullfilled or onRejected functions
    // passed into the .then
    console.log('Definitely Nay! ' + err);
});