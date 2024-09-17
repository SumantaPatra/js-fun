[1,2,3].reduce((a,b) => {
    console.log(a,b)
  });
  // 1, 2
  // undefined, 3
  [1,2,3].reduce((a,b) => {
    console.log(a,b)
  }, 0)
  // 0,1
  // undefined, 2
  // undefined, 3


// reduce() method executes a user-supplied callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result is a single value returned at the end.

// This method has the following syntax — reduce(callbackFn, initialValue) where initialValue is an optional initial value used. If this parameter is skipped, it's assumed to be the first value of the array.

// The way the reducer function works is that the first parameter a is the return value of the result of each iteration while the second parameter b is the current element while iterating.

// Since we are not returning anything from the callback functions here, the function returns undefined implicitly.