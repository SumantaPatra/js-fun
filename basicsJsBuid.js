// conver char to ascii 
const char = 'a' 

const ascii = char.charCodeAt(0);

// consvert back to character

console.log(String.fromCharCode(ascii))


/// promise

Promise.resolve(1)
.finally((data) => { 
  console.log(data) // undefined because .finally() does not receive any argument
  return Promise.reject('error')
})
.catch((error) => {
  console.log(error) // "error" from the rejected promise in previous .finally()
  throw 'error2'
})
.finally((data) => {
  console.log(data) // undefined because .finally() does not receive any argument
  return Promise.resolve(2).then(console.log) // 2
})
.then(console.log) // ignored
.catch(console.log) // "error2" from previous .catch()

// each time async function call generate a new promise
const promise = Promise.resolve(10)
async function f() {
  return promise
}


console.log(f() === f())



// JSON.stringify() method converts a JavaScript object or value to a JSON string following these rules-

// Boolean, Number, and String are converted to the corresponding primitive values during stringification
// undefined is not a valid JSON value. Such values encountered during conversion are either omitted (in an object) or changed to null ( in an array)
// Infinity, NaN, as well as the value null, are all considered null

// both primitives remain as it is
console.log(JSON.stringify(['false', false])) // "["false",false]"
// in an array these values are converted to null
console.log(JSON.stringify([NaN, null, Infinity, undefined])) // "[null,null,null,null]"
// in an object, undefined keys are omitted, while NaN gets converted to null
console.log(JSON.stringify({a: null, b: NaN, c: undefined})) // "{"a":null,"b":null}"


// Number.MAX_VALUE (max value) Number.MIN_VALUE(min value)

console.log(Math.min()) // Infinity
console.log(Math.max()) // -Infinity
console.log(Math.min(1)) // 1
console.log(Math.max(1,2)) // 2
console.log(Math.min([1,2,3])) // NaN