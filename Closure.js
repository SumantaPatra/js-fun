// closure is a combination function and access to its lexical scope 
// we can say closure gives access outer functional scope from inner functional scope
// we can hide the data using closure
const counter = (function () {
    let privateCount = 0;
    return {
        increment: (val = 1) => {
            privateCount += val;
        },
        decrement: (val) => {
            return privateCount -= val;
        },
        getValue: () => {
            return privateCount
        }
    }
})()

console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getValue());


