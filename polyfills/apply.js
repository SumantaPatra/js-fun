Function.prototype.apply = function(obj={},args){
    if(typeof this !== 'function'){
        throw new Error("not callable")
    }
    if(!Array.isArray(args)){
        throw new Error("args must be an arry")
    }
    obj.myFn = this;
    obj.myFn(...args)
}
function getDetails(age,city){
    console.log(`${this.firstName} ${this.lastName} and ${age} and ${city}`)
}

const obj = {
    firstName:"sumanta",
    lastName:"patra"
}

getDetails.apply(obj,[23,"bbsr"])
