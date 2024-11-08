function group(arr,cb){
    const obj ={};
   arr.forEach((el)=>{
    const value = cb(el);
    if(obj[value]){
        obj[value].push(el)
    }else{
        obj[value] = [el];
    }
   })

   return obj;
}

console.log(group([1,2,3.9,3.4],Math.round))