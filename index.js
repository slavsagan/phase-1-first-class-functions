function receivesAFunction(callback) {
  console.log('This calls first')
  callback()
  console.log('This calls last')
}
receivesAFunction(function spy() {
  console.log('This calls second?')
})
/*--------Function Expression----------*/
// const spy = function () {
//   console.log('This calls second?')
// }
// function receivesAFunction(callback) {
//   console.log('This calls first')
//   callback()
//   console.log('This calls last')
// }
// receivesAFunction(spy)

/*--------Function Declaration----------*/
// function spy() {
//   console.log ('This calls second?')
// }

// function receivesAFunction(callback) {
//   console.log ('This calls first')
//   callback()
//   console.log ('This calls last')
// }
// receivesAFunction(spy)

/*--------Anonimous Fanction----------*/
// function receivesAFunction(callback) {
//   console.log ('This calls first')
//   callback()
//   console.log ('This calls last')
// }
// receivesAFunction(function() {
//   console.log ('This calls second?')
// })

function returnsANamedFunction() {
  return function fn() {
    console.log('Hello!')
  }
}
returnsANamedFunction()

function returnsAnAnonymousFunction() {
  return function () {
    console.log('How are you doing?')
  }
}
returnsAnAnonymousFunction()
