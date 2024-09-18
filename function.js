// function declairation vs function expression

// function decaliration are hoisted and cant be use inside if block
// but function expression can be used

// if(function greet(){  // true

// }){
//     console.log("function declairation")
// }

// greet(); // greed is not defined

if(greet=()=>{console.log("greet")}){
    console.log("function expression")
}

greet()  // works fine

