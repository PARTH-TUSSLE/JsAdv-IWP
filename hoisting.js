// var a = 1;
// console.log(a)

console.log(a)
var a = 1;

//this gets converted into this during compile time, output -> undefined

var a; // hoisting
console.log(a)
a = 1 

sayHello() // will work cause it is just the function declaration

function sayHello () {
  console.log("hello");
}

sayBye(); // will not work because it is an expression

var sayBye = function () {
  console.log("bye");
}

// converted into this 

var sayBye;
sayBye();

saybye = function () {
  console.log("bye");
}