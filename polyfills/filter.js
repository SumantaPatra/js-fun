Array.prototype.filter = function (callback){
   const newArr = [];

   for(let i=0; i<this.length; i++){
     callback(this[i],i,this) && newArr.push(this[i]);
   }

  return newArr;
}

const arr = [1,2,3,4,5,6];

console.log(arr.filter((el)=>el%2 == 0))

