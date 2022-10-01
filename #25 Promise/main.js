

const myPromise = new Promise( (resolve, reject) => {
    let connect = true;
    if (connect) {
        resolve("Database Connection Established Successfully!");
    } else {
        reject(Error("Databse Connection Failed!"));
    }
});

myPromise.then(resolved => {
    console.log(resolved);
}, rejected => {
    console.log(rejected);
});

// OR

const thePromise = new Promise( (resolve, reject) => {
    let connect = false;
    if (connect) {
        resolve("Database Connection Established Successfully!");
    } else {
        reject(Error("Databse Connection Failed!"));
    }
}).then(resolved => {
    console.log(resolved);
}, rejected => {
    console.log(rejected);
});

///////////////// .catch()

const lePromise = new Promise( (resolve, reject) => {
    if (Math.random() * 100 < 90) {
        resolve("Good");
    } else {
        reject("Bad");
    }
}).catch(rejected => console.log(rejected));



const monPromise = new Promise( (resolve, reject) => {
    if (Math.random() * 100 < 90) {
        resolve("Good");
    } else {
        reject("Bad");
    }
}).then(resolved => console.log(resolved))
  .catch(rejected => console.log(rejected));