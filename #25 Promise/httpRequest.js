

const myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText)[1].name);
  }
}

myRequest.open("GET", "https://api.github.com/users/OsamaElzero/repos", true);

myRequest.send();

////////// with Promise

const getFirstRepo = URI => {
  return new Promise( (resolve, reject) =>  {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)[1].full_name);
      } else {
        reject(Error(this.status));
      }
    }
    myRequest.open("GET", URI, true);
    myRequest.send();
  })
}

getFirstRepo("https://api.github.com/users/OsamaElzero/repos").then(resolved => {
  let newElement = document.createElement("div");
  let elementText = document.createTextNode(resolved);
  newElement.appendChild(elementText);
  document.body.appendChild(newElement);
}, rejected => console.log(rejected));

