// shallow copy and deep copy 
// when we copy from one object to another object it copies reference of copy instead of value
// const obj1 ={
//     name:"sumanta",
//     age:25,
//     adress:{
//         pin:756120,
//         state:"odisha"
//     }
// }
// const obj2 = Object.assign({},obj1) 

// obj2.age = 30;
// // object.assign and spread opertaor copies one level properties(if its a primitive type) but
// // not coipes nested level object for that we use custon deep copy method

// console.log(obj1,obj2)

function deepCloneCopy(obj){
  if(typeof obj !== "object" || obj === null){  // null === null
    return obj;
  }

  // if its a object(object or array)

  const copiedValue = Array.isArray(obj) ? [] : {};


  Object.keys(obj).forEach((key)=>{
     copiedValue[key] = deepCloneCopy(obj[key])
  })
  return copiedValue;
}

const obj = {
    name:'john',
    adress:{
        pin:565658,
        locality:{
            state:'odisha',
            dist:'cuttack'
        }
    },
    course:[{name:'C++',skill:"high"},{name:'Js',skill:"moderate"}],
    hubbies:["playing cricket"]
}

const newObj = deepCloneCopy(obj)

newObj.adress.pin = 165656;

console.log(obj);
console.log(newObj);

