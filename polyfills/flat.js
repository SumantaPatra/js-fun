Array.prototype.flat = function (depth = 1) {
  function flattenArr(depth,arr) {
    if (depth <= 0 || !Array.isArray(arr)) return arr;

    const result=[];
   
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        result.push(...flattenArr(depth - 1,arr[i]));
      } else {
        result.push(arr[i])
      }
    }
    return result
  }

 return flattenArr(depth,this)
};

const arr = [1, 2, 3, 4, [5, 6]];

console.log(arr.flat(2));
