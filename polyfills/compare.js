const checkObj = (obj)=>{
   return obj !== null && typeof obj === 'object';
}

function compare(obj1,obj2){

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;

    for(const key of keys1){
       const value1 = obj1[key];
       const value2 = obj2[key];

       const isObj = checkObj(value1) && checkObj(value2);
       if(!isObj && value1 !== value2){
        return false;
       }
       
       if(isObj && !compare(value1,value2)){
        return false;
       }
    }
    return true;

}

const obj1 = {
    a:1,
    b:2,
    c:[1,2,3,5]
}
const obj2 = {
    b:2,
    a:1,
    c:[1,2,3,4]
}

console.log(compare(obj1,obj2))

