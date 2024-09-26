Array.prototype.reduce = function(callback,init){
      
    let value = init === undefined ? this[0] : init;

    for(let i=0; i<this.length; i++){
        value = callback(value,this[i])
    }

    return value;
}

const arr = [1,2,3,4,4]
const res = arr.reduce((acc,curr)=>{
  acc.push(curr);
  return acc;
},[])

console.log(res)