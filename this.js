// function sayMyName( name ) {
//   console.log("I am " + name);
// }

// console.log("Heisenberg")

// 1. Implicit binding

const person = {
  name: "Vishwas",
  sayMyName: function () {
    console.log("My name is " + this.name);
  }
}

person.sayMyName();




// 2. Explicit Binding

const person2 = {
  name: "Vishwas2",
  // sayMyName: function () {
  //   console.log("My name is " + this.name);
  // }
};

 function sayMyName() {
   console.log("My name is " + this.name);
 }

 sayMyName.call(person2); // --> the argument inside the call is being reffered!
 
 
// 3. NEW Binding

function Person ( name ) {
  this.name = name;
}

const p1 = new Person("Parth");
const p2 = new Person("Kuchy")

console.log(p1.name)
console.log(p2.name);
