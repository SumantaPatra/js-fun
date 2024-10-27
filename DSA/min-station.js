// minimum number of station required for train

function minPlatfor(arr,dep){

    arr.sort((a,b)=>a-b);
    dep.sort((a,b)=>a-b);

    let i = 0,j=0;
    let count = 0;
    let maxCount = 0;

    while(i < arr.length){
       
        if(arr[i] <= dep[j]){
            i++;
            count++;
        }else{
            count--;
            j++;
        }
      maxCount = Math.max(count,maxCount)
    }

    return maxCount;

}

