function sum(a, b, c){
  return a + b + c;
}

console.log(sum(1, 2, 3)); // -> sum(1)(2)(3)

function curry (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a,b,c)
      }
    }
  }
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

const add1 = curriedSum(1);
const add2 = add1(2); 
const add3 = add2(3);

console.log(add3);
