class LruCache{
   constructor(capacity){
       this.capacity = capacity;
       this.cache = new Map();
       this.order = [];
   }

   get(key){
    if(this.cache.has(key)){
       this.order = this.order.filter((k)=>k!== key)
       this.order.push(key)
        return this.cache.get(key)
    }
       else   return -1;
        
   }
put(key,value){
    if(this.order.length ===  this.capacity){
        const lruKey =  this.order.shift();
       this.cache.delete(lruKey)
    }
    this.cache.set(key,value);
    this.order.push(key)
}


}