// slice and splice are two array methods used for manipulation of data

// slice slice(start,end)--> end< 0 (-4) last 4 element
// slice doesnot modify original array
const arr = [1,2,3,4,5,6,7,8,9];


const slicedArr = arr.slice(0,-1);  // 0 to last one element

console.log(slicedArr)

// splice (startIndex,noOfDeleteCount)  // modifiedtheArr and return the deletedArr element
// splice modified the original array

const splicedArr = arr.splice(1,0,12,14,22,45)  // second position always considered as deletecount

console.log(splicedArr)  


