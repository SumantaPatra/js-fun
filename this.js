// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run(run time binding)
//also this points to promitive value in strict mode 
// if the value of this keyword is undefined or null , js replace the value this to global object only in non-strict mode

function value() {
    "use strict"
    console.log(this);
}

value.call("hello")  // point to String wrapper object in non-strict mode and "hello" in strict mode

// bind create a new function and binding this at the time of creation not at the run time 
// ex-1
class ButtonHandler {
    constructor() {
        this.message = "button clicked!"
    }
    hanldeCLicked() {
        console.log(this.message)
    }
    addButtonListener(button) {
        button.addButtonListener('click', this.hanldeCLicked.bind(this))
    }
}

// const buttonObj = new ButtonHandler();
// // refer the button then call 
// const button = document.getElementById("btn")
// buttonObj.addButtonListener(button)  // this will point to buttonObj insetad of btn because of bind


// ex-2
class Timer {
    constructor() {
        this.seconds = 0;
    }

    // start() {
    //     // Without bind, `this` would refer to the global object (window)
    //     setInterval(function (){
    //         this.seconds++;
    //         console.log(this.seconds);
    //     }, 1000);
    // }

    start() {
        setInterval(this.tick.bind(this), 1000)
    }

    tick() {
        this.seconds++;
        console.log(this.seconds);
    }
}

// const timer = new Timer();
// timer.start(); // Logs increasing seconds every second

// callback (this inside callback depend  upom how its invoked)

// When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis).

[1, 2, 3].forEach(function () {
    "use strict"
    console.log(this) // this point to undefined in strict mode and global in non strict mode
}, { obj: "object" })  // we have a option in all array method to pass a object where this points to


const student1 = {
    name:"student1",
    getName:function(){
        console.log(this.name)
    }
}

const student2 = {
    name:"student2",
}

// student2.getName = student1.getName;

// // student2.getName()
// console.log(student1);
// console.log(student2);

// student1.getName.call(student2)

// console.log(student1);
// console.log(student2);

// Arrow function dont provide their own this binding (it remains the this value of enclosing lexical context)

const obj = {
    message:"hey i am the lexical scope of arrow funtion if there is no lexical boundry",
    // console.log(this)  // two this point to same that is global
    getMessage:()=>{
      console.log(this)  // lexical cotext of obj so this remains same inside getMessage also (point to global)
    }
}

const obj2 = {
    message:"hey i am the lexical scope of arrow funtion if there is no lexical boundry",
    getMessage : function (){
        // console.log(this) // outer this points to obj2 also inner same obj2
        innerArrow = ()=>{
            console.log(this)
        }
        innerArrow()
    }
}
obj2.getMessage()

// this inside dom element is reference to html element

// this inside class behave merely as object 
// this inside class menthods binds to the instantiate object(create using new)

//  the inheritad class has no this binding by default, super() calls the parent constructor and binding this.
// this = new Base()


// this in arrow function always point to caller function context

// const obj = {
//     dev: 'bfe',
//     a: function() {
//       return this.dev
//     },
//     b() {
//       return this.dev
//     },
//     c: () => {
//       return this.dev
//     },
//     d: function() {
//       return (() => {
//         return this.dev
//       })()
//     },
//     e: function() {
//       return this.b()
//     },
//     f: function() {
//       return this.b
//     },
//     g: function() {
//       return this.c()
//     },
//     h: function() {
//       return this.c
//     },
//     i: function() {
//       return () => {
//         return this.dev
//       }
//     }
//   }
  
//   console.log(obj.a())
//   console.log(obj.b())
//   console.log(obj.c())
//   console.log(obj.d())
//   console.log(obj.e())
//   console.log(obj.f()())
//   console.log(obj.g())
//   console.log(obj.h()())
//   console.log(obj.i()())

