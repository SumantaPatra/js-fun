// Promise.MyAll = function(args) {
//   if (!Array.isArray(args)) throw new Error("not iterable");
//   let result = [];
//   let count = 0;

//   return new Promise((resolve, reject) => {
//     args.forEach((promise, index) => {
//       Promise.resolve(promise) // for non promise and promise
//         .then((data) => {
//           count++;
//           result[index] = data;
//           if (count === args.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// }

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("1");
//   }, 5000);
// });
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("2");
//   }, 4000);
// });
// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("3");
//   }, 100);
// });
// const promise4 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Err"); // Rejected promise
//   }, 100);
// });


// promise4.catch((err) => {
//     console.error("Handled promise4 rejection:", err);
//   });
// Include the rejected promise (promise4)
//   const arr = [promise1, promise2, promise3];

// Promise.MyAll([promise1, promise2,promise3,promise4])
//   .then((result) => {
//     console.log("Results:", result);
//   })
//   .catch((err) => {
//     console.error("Error:", err); // Will log the first rejection (Err)
//   });


  // getStates('USA') -> ['CA', 'NY', 'WA']

  // // City API response
  // getCities('CA') -> ['LA', 'SF', 'SD']
  // getCities('NY') -> ['LA1', 'SF1', 'SD1']
  // getCities('WA') -> ['LA2', 'SF2', 'SD2']
  
  // // Problem Requirement
  // // You need to find all the cities in a given country by calling both APIs
  // getAllCities('USA') -> [
  //                         'LA', 'SF', 'SD',
  //                         'LA1', 'SF1', 'SD1', 
  //                         'LA2', 'SF2', 'SD2',
  //                        ];


  // function getStates(countryName){
  //   return new Promise((res,rej)=>{
  //      setTimeout(()=>{
  //       res(['CA', 'NY', 'WA'])
  //      },3000)
  //   })
  // }

  // function getCities(cityName){
  //   return new Promise((resolve,rej)=>{
       
  //     setTimeout(()=>{
  //        switch(cityName){
  //         case 'CA':
  //          resolve(['LA', 'SF', 'SD'])
  //          break;
          
  //         case 'NY':
  //          resolve(['LA1', 'SF1', 'SD1'])
  //          break;

  //         case 'WA':
  //           resolve(['LA2', 'SF2', 'SD2'])
  //           break;

  //         default:
  //           break;
  //        }
  //     },2000)

  //   })
  // }

  // async function getAllCities(countryName){
  //    const cities = await getStates(countryName);

  //    const promiseArr = cities.map((city)=> getCities(city));
     
  //    return Promise.all(promiseArr)
  // }

  // getAllCities('USA').then((data)=>{
  //   console.log(data)
  // })

// console.log(Promise.resolve(new Promise((res)=>{
//   res(3)
// })))
