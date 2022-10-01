/*
** Ignoring Pyramid of Doom
*/


const promise = new Promise( (resolve, reject) => {
  let arr = ["A", "B", "C", "D", "E", "F", "G"];
  resolve(arr);
});

promise.then(result => {
  console.log(...result);
  return result;
}).then(result => {
  console.log(`Total Number of Posts: ${result.length} Posts`);
  return result;
}).then(result => {
  console.log(`The First Post: ${result[0]}`);
  return result;
}).then(result => {
  console.log(`The Last Post: ${result[result.length-1]}`);
  return result;
}).then(result => {
  console.log("Each page has two articles");
  return result;
}).then(result => {
  console.log(`Total Number of Pages: ${Math.round(result.length / 2)} Pages`);
  return result;
}).then(arr => {
  arr.forEach(el => {
    let newElement = document.createElement("div");
    let textElement = document.createTextNode(el);
    newElement.appendChild(textElement);
    document.body.appendChild(newElement);
  })
  return arr;
})

// .
// .
// .
// etc


////// fetch

fetch("https://api.github.com/users/ElzeroWebSchool/repos") // This return a promise So we can use .then() and .catch()
  .then(result => {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos;
  })
  .then(repos => {
    console.log(`This User has ${repos.length} Repositories`);
    return repos;
  })
  .then(repos => {
    console.log(`First Repository is ${repos[0].name} [${repos[0].id}]`);
    return repos;
  })
  .then(repos => {
    console.log(`Last Repository is ${repos[repos.length-1].name} [${repos[repos.length-1].id}]`);
  });