// whatever value we provide in resolve it will acces by then
// .then((valu1,valu2))--> value 2 is the rej(value)
// Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term).
// return value from one promises will be available for another promises(promise chain)
// function loadScript(src){
//     return new Promise((resolve,reject)=>{
//         resolve(src)
//     })
// }

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

// let promise = new Promise((resolve, reject) => {
//     resolve('Success');
//     // Or: reject('Error');
//   });

// Using .then().catch()
// promise
//   .then(value => {
//     console.log('Resolved with:', value);
//     // Simulate an error
//     throw new Error('Error in then');
//   })
//   .catch(error => {
//     console.error('Caught by catch:', error);
//   });

// Using .then(f1, f2)
// promise
//   .then(
//     value => {
//       console.log('Resolved with:', value);
//       // Simulate an error
//       throw new Error('Error in then');
//     },
//     error => {
//       console.error('Caught by then:', error);
//     }
//   );

// using first throwing error is handled by next block that is catch block
// second throwing error is not handle by any catch block
// promise chaining
// Promise.resolve().then(()=>{
//    return "helllo"
// }).then((data)=>{
//   console.log(data);
//   return "hey"
// }).then((data)=>{
//   console.log(data);
// })

// const state = {
//   FULLFILED: "fullfiled",
//   REJECTED: "rejected",
//   PENDING: "pending",
// };

// class myPromise {
//   #status = state.PENDING;
//   #value;
//   #thenCbs = [];
//   #catchCbs = [];
//   #onSucessBinded = this.#onSuccess.bind(this); //for chaining its help to bind this to current class instance
//   #onFailBinded = this.#onFailure.bind(this);

//   constructor(cb) {
//     cb(this.#onSucessBinded, this.#onFailBinded);
//   }
//   #onSuccess(value) {
//     queueMicrotask(()=>{
//       if (this.#status !== state.PENDING) return;

//       if(value instanceof myPromise){  // promise return a promise
//         value.then(this.#onSucessBinded,this.#onFailBinded)
//         return
//       }

//       this.#value = value;
//       this.#status = state.FULLFILED;
//     })
//   }
//   #onFailure() {
//     queueMicrotask(()=>{
//       if (this.#status !== state.PENDING) return;

//       if(value instanceof myPromise){  // promise return a promise
//         value.then(this.#onSucessBinded,this.#onFailBinded)
//         return
//       }

//       if(this.#catchCbs.length === 0) throw new Error("unhandled exception")

//       this.#value = value;
//       this.#status = state.REJECTED;
//     })

//   }
//   #runCallback() {
//     if (this.state.FULLFILLED === "fullfiled") {
//       this.#thenCbs.forEach((callback) => {
//         callback(this.#value);
//       });
//       this.#thenCbs = [];
//     }
//     if (this.state.REJECTED === "rejected") {
//       this.#catchCbs.forEach((callback) => {
//         callback(this.#value);
//       });
//       this.#thenCbs = [];
//     }
//   }

// // When thenCb is null, the user skips the success handling.
// // We resolve the result to ensure the chain continues and the next .then() receives the result.
// // This maintains the promise chain and ensures correct propagation of results and errors.
// // if then param is not a function simply it skipped
//   then(thenCb, catchCb) {
//     //.then().catch().then()
//     return new myPromise((resolve, reject) => {
//       this.#thenCbs.push((result) => {
//         if (thenCb === null) {
//           resolve(result); // When thenCb is null, it means the user does not care about handling the success case explicitly at that point in the chain. Instead, they might be interested in handling the error case later in the chain with a .catch()

//           return;
//         }
//         try {
//           resolve(thenCb(result));
//         } catch (error) {
//           reject(error);
//         }
//       });
//       this.#catchCbs.push((result) => {
//         if (catchCb === null) {
//           reject(result);
//           return;
//         }
//         try {
//           resolve(catchCb(result));
//         } catch (error) {
//           reject(error);
//         }
//       });
//       this.#runCallback();
//     });
//   }
//   catch(cb) {
//     return this.then(null, cb);
//   }
//   finally(cb){
//     return this.then(result=>{
//       cb();
//       return result;
//     }, result=>{
//       cb()
//       throw result;
//     })
//   }
//   static resolve(value){
//     return new Promise((resolve)=>{
//       resolve(value)
//     })
//   }
//   static reject(value){
//     return new Promise((resolve)=>{
//       reject(value)
//     })
//   }
//   // return all resolved result in  an array if reject return rejected value only
//   static all(promises){
//     return new myPromise((resolve,reject)=>{
//       let completedPromise =0;
//       const result = [];

//       for(let i=0; i<promises.length; i++){
//         const promise = promises[i];
//         promise.then((value)=>{
//            completedPromise++;
//             result[i] = value;
//            if(completedPromise === promise.length){
//             resolve(result)
//            }

//         }).catch((err)=>reject(err))
//       }

//     })

//   }
//   // return all success and error promise results in an array

//   static allSettled(promises){
//    return new myPromise((resolve,reject)=>{
//     let count =0;
//     const result = [];
//     for(let i=0; i<promises.length; i++){
//       const promise = promises[i];
//       promise.then((value)=>{
//        result[i] = {status:state.FULLFILED,value}
//       }).catch((err)=>{
//         result[i] = {status:state.REJECTED,value}
//       }).finally(()=>{
//         count++;
//         if(count === promise.length) resolve(result)
//       })
//     }
//    })

//   }

//   // return the first settled promise(resolve/reject)

//   static race(promises){
//     return new myPromise((resolve,reject)=>{
//       promises.forEach((promise)=>promise.then(resolve).catch(reject))
//     })

//   }

// }

// const prmise = new Promise((res,rej)=>{

//   res("hello")

// })

// prmise.then((data)=>{
//   console.log(data);
// }).then((data)=>{
//   console.log(data)
// }).then((data)=>{
//   console.log(data);
// })

class myPromise {
  #state = "pending";
  #value;
  #thenCbs = [];
  #catchCbs = [];
  #onSucessBind = this.#successCb(this); // bind this bcause of chaining
  #failwareBind = this.#failCb(this);

  constructor(cb) {
    try {
      cb(this.#onSucessBind, this.#failwareBind);
    } catch (error) {
      this.#failCb(error);
    }
  }

  #runCallbacks() {
    if (this.#state == "fulfilled") {
      this.#thenCbs.forEach((cb) => {
        cb(this.#value);
      });
      this.#thenCbs = [];
    }
    if (this.#state == "rejected") {
      this.#catchCbs.forEach((cb) => {
        cb(this.#value);
      });
      this.#catchCbs = [];
    }
  }

  #successCb(value) {
    if (this.#state !== "pending") {
      return; // resolve("hi") resolve("helllo") onlu call first resolve
    }
    if (value instanceof myPromise) {
      value.then(this.#onSucessBind, this.#failwareBind);
      return;
    }
    this.#value = value;
    this.#state = "fulfilled";
    this.#runCallbacks();
  }

  #failCb(value) {
    if (this.#state !== "pending") {
      return; // resolve("hi") resolve("helllo") onlu call first resolve
    }
    if (value instanceof myPromise) {
      value.then(this.#onSucessBind, this.#failwareBind);
      return;
    }
    this.#value = value;
    this.#state = "rejected";
    this.#runCallbacks();
  }

  then(successCb, rejectCb) {
    return new myPromise((res, rej) => {
      this.#thenCbs.push((result) => {
        if (successCb == null) {
          res(result);
          return;
        }
        try {
          res(successCb(result));
        } catch (error) {
          rej(error);
        }
      });
      this.#catchCbs.push((result) => {
        if (rejectCb == null) {
          rej(result);
          return;
        }
        try {
          res(rejectCb(result));
        } catch (error) {
          rej(error);
        }
      });
      this.#runCallbacks(); // run after already resolved promise
    });
  }

  catch(catchCb) {
    return this.then(undefined, catchCb);
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new myPromise((res) => {
      res(value);
    });
  }

  static reject(value) {
    return new myPromise((res, rej) => {
      rej(value);
    });
  }

  static all(promises) {
    const results = [];
    let count = 0;
    return new myPromise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((val) => {
            results[i] = val;
            count++;
            if (count === promises.length) {
              res(results);
            }
          })
          .catch((err) => {
            rej(err);
          });
      }
    });
  }

  static allSettled(promises) {
    const results = [];
    let completedPromise = 0;
    return new myPromise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((val) => {
            results[i] = { status: "fulfilled", val };
          })
          .catch((err) => {
            results[i] = { status: "rejected", err };
          })
          .finally(() => {
            completedPromise++;
            if (completedPromise === promises.length) {
              res(results);
            }
          });
      }
    });
  }

  static race(promises) {
    return new myPromise((res, rej) => {
      promises.forEach((promise) => {
        promise.then(res).catch(rej);
      });
    });
  }

  static any(promises) {
    const error = [];
    let rejectedError = 0;
    return new myPromise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(res).catch((err) => {
          rejectedError++;
          error[i] = err;
          if (rejectedError === promises.length) {
            rej("All promise error rejected");
          }
        });
      }
    });
  }
}

const p = new myPromise((res, rej) => {
  // setTimeout(res,100)
  res("resoolved");
});
p.then((data) => {
  console.log(data);
});
