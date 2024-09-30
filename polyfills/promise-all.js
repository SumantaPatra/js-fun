Promise.MyAll = function(args) {
  if (!Array.isArray(args)) throw new Error("not iterable");
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    args.forEach((promise, index) => {
      promise
        .then((data) => {
          count++;
          result[index] = data;
          if (count === args.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, 5000);
});
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2");
  }, 4000);
});
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3");
  }, 100);
});
const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Err"); // Rejected promise
  }, 100);
});


// promise4.catch((err) => {
//     console.error("Handled promise4 rejection:", err);
//   });
// Include the rejected promise (promise4)
//   const arr = [promise1, promise2, promise3];

Promise.MyAll([promise1, promise2,promise3,promise4])
  .then((result) => {
    console.log("Results:", result);
  })
  .catch((err) => {
    console.error("Error:", err); // Will log the first rejection (Err)
  });
