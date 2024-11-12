// const obj = {
//     a:1,
//     b:"dhsjdhjs",
//     c:[1,2,3,4],
//     d:{
//         e:{
//             f:40
//         }
//     }
// }

// const newObj = {...obj}; // only copied the non-promitive value(copy by value) rest copy by reference

// newObj.b = 10;
// newObj.c.push(30)
// // newObj.d.e.f = 400
// obj.d.e.f=100

// // console.log(obj)
// // console.log(newObj);

// let obj1 ={
//   a:10
// }

// const arr = [obj1];

// obj1 = null;

// console.log(arr)
// console.log(obj);
// console.log(newObj);



async function fun1(){
    console.log("fun1 starting");

    await fun2();

    console.log("fun1 ending")

}

async function fun2(){
   console.log("fun2 starting");

  return  Promise.resolve().then(()=>{
     console.log("fun2 ending")
   })

}

fun1()

new Promise((resolve,reject)=>{
    resolve("hello")
}).then((data)=>{
    console.log(data);
})

// console.log("end")

// function call(){ // 1 2 3 4 5 6 // place in macrotask quesue bcz of timeout
//     return new Promise(resolve => setTimeout(resolve,100))
// }

// all callback promise(then) cb will push into microtask queue which have more priority then macrtask queuse(cb from setTimeout etc)

function call(){ //1 4 2 5 3 6 [1,4]-->[2,5]->... (resolve immidiately so call with microtask queue until its empty)
    return Promise.resolve()
}

call().then(()=>console.log(1))
      .then(()=>console.log(2))
      .then(()=>console.log(3))

      call().then(()=>console.log(4))
      .then(()=>console.log(5))
      .then(()=>console.log(6))




