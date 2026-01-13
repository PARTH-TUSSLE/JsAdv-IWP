// function setTimeoutPromisified (ms) {
//   let p = new Promise( resolve => setTimeout(resolve, ms) )

//   return p ;
// }

// function callback () {
//   console.log("3 seconds have passed")
// }

// setTimeoutPromisified(3000).then(callback);

// function waitFor3s (resolve) {
//   setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified () {
//   return new Promise(waitFor3s); //when the first argument (function) of the first argument (resolve function) passed to the promise object is called, then the function in the .then gets executed! --> so in this case, the first argument (resolve) is called after 3 seconds, so the main function is also called
// }

// function main () {
//   console.log("Main was called !")
// }

// setTimeoutPromisified().then(main);

function setTimeoutPromisified (duration) {
  return new Promise ( function (resolve) {
    setTimeout(resolve, duration)
  } )
}

function callback () {
  console.log("2 seconds have passed !")
}

setTimeoutPromisified(1000).then( function () {
  console.log("1 sec");
  return setTimeoutPromisified(2000)
}).then (function () {
  console.log("4 sec");
  return setTimeoutPromisified(5000)
}).then( function () {
  console.log("8 sec")
})