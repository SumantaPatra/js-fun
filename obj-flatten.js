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

//   {
//     user_name: "Vishal",
//     user_address_primary_house: "109",
//     user_address_primary_street_main: "21",
//     user_address_primary_street_cross: "32",
//   }





