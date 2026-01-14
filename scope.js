// let a = 10;

// function outer () {
//   let b = 20;
//   function inner () {
//     let c = 30;
//     console.log(a, b, c);    //-->  LEXICAL Scoping
//   }
//   inner();
// }

// outer();

function outer () {
  let counter = 0;
  function inner () {
    counter++;
    console.log(counter)
  }
  return inner; //inner() // function scope is also returned with the function definition   --> CLOSURES
}

// outer()
// outer()

const fn = outer()

fn()
fn()