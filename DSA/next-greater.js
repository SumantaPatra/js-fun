function nextGreater(arr){
  let n = arr.length;
  const result = new Array(n).fill(0)
 
  const stack = [];

  stack.push(arr[n-1])
  result[n-1] = -1;


  for(let i=arr.length-2; i>=0; i--){
     if(arr[i] <= stack[stack.length-1]){
        result[i] = stack[stack.length-1];
        stack.push(arr[i])
     }else{
        
        while(stack.length > 0 && (stack[stack.length-1] < arr[i])){}

        if(stack.length === 0) {
            stack.push(arr[i]);
            result[i] = -1;
        }


     }
  }

  return result

}

console.log(nextGreater([1,2,3,4]))

