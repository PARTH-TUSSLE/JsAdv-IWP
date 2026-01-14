let str = "parth";
let strArr = ['p', 'a', 'r', 't', 'h'];

for (const char of str) {
  console.log(char);
}

for (const char of strArr) {
  console.log(char);
}


// we created an object to be an iterable
// same thing JS does to strings, arrays, maps and sets by default

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return {value: undefined, done: true};
      }
    }
    return iterator
  }
}

for (const word of obj) {
  console.log(word);
}