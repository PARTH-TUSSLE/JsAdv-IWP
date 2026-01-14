//PROTOTYPES

// function Person( fName, lName ) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// const p1 = new Person( "Clark", "Kent" )
// const p2 = new Person("Bruce", "Wayne");

// // p1.getName = function () {
// //   return this.firstName + " " + this.lastName;
// // }

// Person.prototype.getName = function () {
//   return this.firstName + " " + this.lastName; // -> the getName function gets attached to every instance of the Person object
// };  

// // console.log(p1);
// console.log(p1.getName());
// console.log(p2.getName()); // -> throws error cause the getName function is only attached to the p1 object

// PROTOTYPAL INHERITANCE

function Person( fName, lName ) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getName = function () {
  return this.firstName + " " + this.lastName; 
};  

function SuperHero ( fName, lName ) {
  //this = {}
  Person.call(this, fName, lName);// (constructor stealing) //--> Now this keyword in Person will refer to the this keyword in SuperHero  // firstName and lastName properties are inherited by SuperHero

  // This means Run Person constructor inside SuperHero, using SuperHero’s this
  // but methods still aren't inherited

  this.isSuperHero = true;
}



SuperHero.prototype = Object.create(Person.prototype); // fall backs to the Person obj when the getName function is not found related to the this of SuperHero -> this of Person obj // -> method inherited 

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime !");
};

const Batman = new SuperHero("Tony", "Stark");

console.log(Batman.getName());
Batman.fightCrime()

SuperHero.prototype.constructor = SuperHero // otherwise JS thinks the SuperHero is created by person , which is incorrect