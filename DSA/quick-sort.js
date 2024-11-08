function quickSort(arr){

    function partition(low,high){

        let pivot = arr[low];

        let i=low;
        let j = high;

        while(i < j){
          
          while(arr[i] <= pivot && i <= high){
            i++;
          }

          while(arr[j] > pivot && j >= low){
            j--;
          }

          if(i < j) [arr[i],arr[j]] = [arr[j],arr[i]];
        }

        // swap pivot
        [arr[low],arr[j]] = [arr[j],arr[low]];

        return j;


    }
  
    function quicksortHelper(low,high){

        if(low >= high) return

        let pIndex = partition(low,high);
        quicksortHelper(low,pIndex-1);
        quicksortHelper(pIndex+1,high);

    }

    quicksortHelper(0,arr.length-1);

}

const arr = [1,9,4,3,2,0];

quickSort(arr)

console.log(arr);