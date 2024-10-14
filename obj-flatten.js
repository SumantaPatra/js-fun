// function flatObj(obj, parentKey = "uesr") {

//   let result  ={};

//   for (const key in obj) {
//     const newKey = parentKey ? `${parentKey}_${key}` : parentKey;

//     if(Array.isArray(obj[key])){
//         obj[key].forEach((el,index)=>{
//             const arrKey = `${newKey}_${index}`
//             result[arrKey] = el;
//         })
//     }
//     else if (typeof obj[key] == "object") {
//         const flattenedChild = flatObj(obj[key], newKey);
//         result = { ...result, ...flattenedChild };
//     } else {
//       result[newKey] = obj[key];
//     }
//   }

//   return result;
// }

// var user = {
//   name: "Vishal",
//   address: {
//     primary: {
//       house: "109",
//       street: {
//         main: "21",
//         cross: "32",
//       },
//     },
//   },
//   num:[1,2,3,4]
// };

// console.log(flatObj(user))

// //   {
// //     user_name: "Vishal",
// //     user_address_primary_house: "109",
// //     user_address_primary_street_main: "21",
// //     user_address_primary_street_cross: "32",
// //   }


// function flatObj(obj,parentKey=""){
    
//     let result = Array.isArray(obj) ? [] : {};
    
//     for(const key in obj){
        
//         const newKey = parentKey ? `${parentKey}.${key}` : key;
        
//         if(Array.isArray(obj[key])){
//           const f1 = flatObj(obj[key],newKey);
//           result = {...result,...f1}
//         }    
//        else if(typeof obj[key] == "object"){
//           const f2 = flatObj(obj[key],newKey);
//           result = {...result,...f2}
          
//        }
//        else if(typeof obj[key] === 'number'){
//         result[newKey]  = obj[key] + 10;
//        }
//        else{
//            result[newKey] = obj[key];
//        }
//     }
    
//     // console.log(result)
    
//     return result;
    
// }


// const obj = {
//     a:1,
//     b:2,
//     c:{
//         d:{
//             e:{
//                 f:4
//             }
//         }
//     },
//     g:[1,2,3,{arr1:345}]
// }

// console.log(flatObj(obj))

// const arr = [1,2,3,4];


function modifyObj(obj){
    
    
    const result = {};
    
    for(const key in obj){
        
        if(Array.isArray(obj[key])){
        result[key] = obj[key].map(item => {
        if (typeof item === 'number') {
          return item + 10; // Add 10 if the element is a number
        } else if (typeof item === 'object' && item !== null) {
          return modifyObj(item); // Recursively modify if it's an object
        } else {
          return item; // Copy non-numeric values as they are
        }
      });
            
        }else if(typeof obj[key] === 'object' && obj[key] !== null){
            result[key] = modifyObj(obj[key]);
            
        }else if(typeof obj[key] === 'number'){
            result[key] = obj[key]+10;
            
        }else{
            result[key] = obj[key];
        }
        
    }
    
    return result;
    
    
}

const obj = {
    a:1,
    b:2,
    c:{
        d:{
            e:{
                f:4
            }
        }
    },
    g:[1,2,3,{arr1:345,arr2:[1,2,3]}]
}

const ans = modifyObj(obj);

ans.g.forEach((el)=>{
    console.log(el)
})





