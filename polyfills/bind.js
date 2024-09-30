Function.prototype.bind = function(obj={},...args1){
    if(typeof this !== 'function'){
        throw new Error("not callbale")
    }
    obj.myFn = this;
    return function(...args2){
       obj.myFn(...args1,...args2);
    }
}


function getDetails(age,city,state){
    console.log(`${this.firstName} ${this.lastName} and ${age} and ${city} and ${state}`)
}

const obj = {
    firstName:"sumanta",
    lastName:"patra"
}

const fn = getDetails.bind(obj,24,"bbsr");

fn("odisha")