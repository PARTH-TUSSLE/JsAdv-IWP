const fs = require("fs");

function print ( err, data ) {
  console.log(data)
}

fs.readFile("a.txt", "utf-8", print) // async
fs.readFile("b.txt", "utf-8", print); // async // passing function signature

console.log("Done!")


function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");


setTimeout(timeout, 1000);

console.log("Welcome to loupe.");

let c = 0;

for (let i = 0; i < 1000000000; i++) {
  c = c + 1 ;
}

console.log("Expensive operation done !")

// // CPU intesive for loop will occupy the thread and the callback after 1 sec timeout will get stuck in the callback queue and logged after the logging of expensive operation


//PROMISIFIED VERSION of ReadFile

function readTheFile (resolvedVal) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    resolvedVal(data);
  } )
}

function readFile () {
  return new Promise(readTheFile)
}

function callback ( contents ) {
  console.log(contents);
}

readFile().then(callback)

// somehow the callback function in the .then replaces the resolvedVal function