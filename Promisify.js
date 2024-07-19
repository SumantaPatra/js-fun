// prmisify is used to convert a callback function to promise based
// Promisification is meant for single-call asynchronous operations. For functions that may call the callback multiple times (like event listeners), other patterns such as observables or event emitters are more appropriate

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// const onEventPromise = () => new Promise((resolve) => {
//     myEmitter.on('event', (data) => {
//         resolve(data);
//     });
// });

onEventPromise()
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Emitting events multiple times
myEmitter.emit('event', 'First event');
myEmitter.emit('event', 'Second event');
function loadScript(src,cb){
   const script = document.createElement("script");
   script.src = src;
   script.onload = () => cb(null,src);
   script.onerror = ()=> cb(new Error("getting failed to load the script"))
}
function promisify(){
    return new promise((resolve,reject)=>{
       loadScript("file:///",(err,src)=>{
          if(err) resolve(src);
          reject(err)
       })

    })
}
promisify.then((src)=>console.log(src))

// create some promisify utils that accept a callback function and convert to promise base


function promisify(f){
    return function(...args){
        return new promise((resolve,rej)=>{
            function callback(err, result) { // our custom callback for f (**)
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
            }

            args.push(callback)
            f.call(this,...args)
        })

    }
}

// use of promisification --> convert a callback hell to simple code

fs.readFile('file1', (err, data1) => {
    if (err) return console.error(err);
    fs.readFile('file2', (err, data2) => {
        if (err) return console.error(err);
        fs.readFile('file3', (err, data3) => {
            if (err) return console.error(err);
            console.log(data1, data2, data3);
        });
    });
});

// call back hell;

const promisiFy = promisify(fs.readFile)
promisiFy("ghghhg").then((data)=>{
    return promisiFy("kjkjk")
}).then()
// ...
