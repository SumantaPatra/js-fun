const obj = {
    a:1,
    b:"dhsjdhjs",
    c:[1,2,3,4],
    d:{
        e:{
            f:40
        }
    }
}

const newObj = {...obj}; // only copied the non-promitive value(copy by value) rest copy by reference

newObj.b = 10;
newObj.c.push(30)
// newObj.d.e.f = 400
obj.d.e.f=100

// console.log(obj)
// console.log(newObj);

let obj1 ={
  a:10
}

const arr = [obj1];

obj1 = null;

console.log(arr)







