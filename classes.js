// same thing in prototype.js just using classes instead
// classes are just a syntactical sugar on what we already did with prototypal inheritance

class Person {
  constructor (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayMyName () {
    return "I am " + this.firstName + " " + this.lastName;
  }
}

const p1 = new Person("Bruce", "Wayne");
console.log(p1.sayMyName());

class SuperHero extends Person {
  constructor ( fName, lName ) {
    super(fName, lName); // calls the constrctor of the parent class (Person)
    this.isSuperHero = true;
  }

  fightCrime () {
    console.log( this.firstName + " is fighting crime !")
  }

}

const IronMan = new SuperHero("Tony", "Stark")

console.log(IronMan.sayMyName());
IronMan.fightCrime();