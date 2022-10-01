

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

/////////////////////////////////

const myFirstPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve ("First Promise Resolved");
  } else {
    reject (Error("First Promise Rejected"));
  }
})

const mySecondPromise = new Promise((resolve, reject) => {
  let settings = false;
  if (settings) {
    resolve ("Second Promise Resolved");
  } else {
    reject (Error("Second Promise Rejected"));
  }
})

Promise.all([myFirstPromise, mySecondPromise])
  .then(resolved => console.log(resolved), rejected => console.log(rejected)); // This will Execute All Promises If All Promises Are Resolved. If Not Error.


  const theFirstPromise = new Promise((resolve, reject) => {
    let connect = true;
    setTimeout( _ => {
      if (connect) {
        resolve ("First Promise Resolved");
      } else {
        reject (Error("First Promise Rejected"));
      }
    }, 500)
  })
  
  const theSecondPromise = new Promise((resolve, reject) => {
    let settings = true;
    setTimeout( _ => {
      if (settings) {
        resolve ("Second Promise Resolved");
      } else {
        reject (Error("Second Promise Rejected"));
      }
    }, 100)
  })

Promise.race([theFirstPromise, theSecondPromise]).then(resolved => console.log(resolved), rejected => console.log(rejected)); // This Will Execute The First Promise Loaded.