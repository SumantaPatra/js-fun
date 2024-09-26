Array.prototype.map = function(callback){
    const newArr = [];

    for(let i=0; i<this.length; i++){
        newArr.push(callback(this[i],i,this))
    }
    return newArr;
}

const arr = [1,2,23,34];

const newArr = arr.map((curr,index)=>{
    return curr+1;
})