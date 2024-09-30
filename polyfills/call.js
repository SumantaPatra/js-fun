Function.prototype.call = function(obj={},...args){
    if(typeof this !== 'function'){
        throw new Error("not callable")
    }

    obj.myFn = this; // asigning a propery to obj which refs to printName
    obj.myFn(...args)
}
function printName(age){
  console.log(`${this.firstName} ${this.lastName} ${age}`)
}
const obj = {
    firstName:"sumanta",
    lastName:"patra"
}
printName.call(obj,24)




