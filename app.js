
function getWordOfTheDay() {

    console.log("Wednesday is hump day!");
}

let myPromise = getWordOfTheDay();
myPromise.then(function (word) {
    // I am the success callback
    console.log(word);
}, function (err) {
    // I am the error callback
    console.log('something went wrong');
});




