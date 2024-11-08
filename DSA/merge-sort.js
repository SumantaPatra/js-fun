function mergeSort(arr){

    function merge(l,mid,r){
      const mergedArr =  new Array(r-l+1);
      let i=l;
      let k=0;
      let left = l;
      let right = mid+1;
      
      while(left <= mid && right <= r){
        if(arr[left] <= arr[right]){
            mergedArr[k++] = arr[left++];
        }else{
            mergedArr[k++] = arr[right++];
        }
      }

      while(left <= mid){
        mergedArr[k++] = arr[left++];
      }
      while(right <= r){
        mergedArr[k++] = arr[right++];
      }
      
      for(let j =0; j<mergedArr.length; j++){
        arr[i+j] = mergedArr[j];
      }


    }
 
    function mergeHelper(l,r){

        if(l >= r){
            return ;
        }
        
        let mid = Math.floor((l+r)/2);

        mergeHelper(l,mid);
        mergeHelper(mid+1,r);
        merge(l,mid,r);

    }

    mergeHelper(0,arr.length-1);





}


const arr = [5,9,8,0,1,3,4,-1,-2];

mergeSort(arr);

console.log(arr)