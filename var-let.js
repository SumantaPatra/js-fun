// var is fucntional scope and let is block scpe
// for(var i=1; i<=3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }  // 4 4 4  after 1 sec because scope of i is global(single copy of i) as its present inside global function

// for(let i=1; i<=3; i++){
//     setTimeout(()=>{
//      console.log(i)
//     },1000)
// } // 1 2 3 after 1 second  because scope of i is block scope(create separate i) for each interation


// for(let i=1; i<=3; i++){
//     setTimeout(console.log,i*1000,i)
// }

for(var i=1; i<=3; i++){
    (function(i){
        setTimeout(()=>{
         console.log(i);
        },1000)
    })(i)
}  // we have bound the scope of i to a function (IIFE)  --> 1 2 3