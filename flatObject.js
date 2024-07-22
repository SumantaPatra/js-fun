function flatObj(obj,prevKey ="",result={}){
    for(let key in obj){
         const newKey = prevKey ? `${prevKey}.${key}` : key;
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
           flatObj(obj[key],newKey,result)
        }else{
            if(Array.isArray(obj[key])){
                obj[key].forEach((el,index)=>{
                    const formedKey = `${key}.${index}`;
                    result[formedKey] = el;
                })
            }else
              result[newKey] = obj[key]
        }
    }

    return result;



}




const obj = {
    a:{
        b:{
            c:{
                d:2
            }
        }
    },
    e:5,
    f:{
        g:{
         h:5
        }
    },
    arr:[1,2,3]
}

console.log(flatObj(obj))