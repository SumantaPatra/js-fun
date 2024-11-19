function flatObj(obj,prevKey =""){

    const result = {};

    for(let key in obj){
         const newKey = prevKey ? `${prevKey}.${key}` : key;
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
          result[newKey] = flatObj(obj[key],newKey)
        }else{
            if(Array.isArray(obj[key])){
                obj[key].forEach((el,index)=>{
                    const tempKey = `${newKey}.${index}`
                    if(typeof el == 'object' && !Array.isArray(el)){
                        result[tempKey] = flatObj(el,tempKey)
                    }else{
                        result[tempKey] = el;
                    }
                })
            }else
              result[newKey] = obj[key]
        }
    }
    return result;

}
var user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {
          main: "21",
          cross: "32",
        },
      },
    },
  };

// console.log(flatObj())




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

console.log(flatObj(obj).a)