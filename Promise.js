// whatever value we provide in resolve it will acces by then
// .then((valu1,valu2))--> value 2 is the rej(value)

function loadScript(src){
    return new Promise((resolve,reject)=>{
        resolve(src)
    })
}


// loadScript("http://ur1.com")
//          .then((url1)=>{
//             loadScript("http://ur2.com")
//             .then((url2)=>{
//                 console.log(url1,url2)
//             })
//          })


// loadScript("/article/promise-chaining/one.js")
//   .then(function(script1) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function(script2) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function(script3) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     console.log(script3);
//   });




//   function fetch(url){
//     const data = "some data is there"
//     const obj = {
//         text:()=>{
//             // return promise resolve with text value
//             // Promise.resolve("mbjbb")
//         },
//         // ... other methods
//     }
//     return new Promise((res,rej)=>{
//        res(obj)
//     })
//   }


// fn('/article/promise-chaining/user.json')
//   // .then below runs when the remote server responds
//   .then(function(response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     return response.text();
//   })
//   .then(function(text) {
//     // ...and here's the content of the remote file
//     alert(text); // {"name": "iliakan", "isAdmin": true}
//   });


// Promise.resolve(1)  ---> new Promise((res)=>res(1))
// Promise.resolve(1).then((data)=>console.log(data)) --> rerturn a promise 
// use this when we want to resolve value directly instaed of some logic validation

let promise = new Promise((resolve, reject) => {
    resolve('Success');
    // Or: reject('Error');
  });
  
  // Using .then().catch()
  promise
    .then(value => {
      console.log('Resolved with:', value);
      // Simulate an error
      throw new Error('Error in then');
    })
    .catch(error => {
      console.error('Caught by catch:', error);
    });
  
  // Using .then(f1, f2)
  promise
    .then(
      value => {
        console.log('Resolved with:', value);
        // Simulate an error
        throw new Error('Error in then');
      },
      error => {
        console.error('Caught by then:', error);
      }
    );

 // using first throwing error is handled by next block that is catch block
 // second throwing error is not handle by any catch block   