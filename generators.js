// same example in iterators using generators

function normalFunc () {  // will only be stopped after complete execution or if we throw an error
  console.log("Hello");
  console.log("World");
}

function* generatorFunc () {  // generator funcs can pause the execution 
  yield "hello" // special operator with which a generator can pause itself (everytime the yield operator is encounter, the generator function yields the value right after it (not exactly the same as return)) 
  yield "World"
}

const generatorObj = generatorFunc() // the generatorFunc creates a generator Object which is and iterator

for (const word of generatorObj) {
  console.log(word); // since generatorObj is an iterator, forof loops can be used
}