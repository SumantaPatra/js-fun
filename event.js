
// please complete the implementation
class EventEmitter {
    constructor(){
      this.obj = {};
    }
    subscribe(eventName, callback) {
      const cbObj = {callback}
        if(this.obj[eventName]){
        this.obj[eventName].add(cbObj)
      }else{
        this.obj[eventName]=new Set();
        this.obj[eventName].add(cbObj)
      }
      return {
        release:()=>{
          this.obj[eventName].delete(cbObj)
          // if(this.obj[eventName].size === 0){
          //   delete this.obj[eventName]
          // }
          // console.log(list)
          // delete list.get(callback)
        }
      }
    }
    
    emit(eventName, ...args) {
        for(const cb of this.obj[eventName]){
          cb.callback.apply(this,args)
      }
    }
  }
  
  const emitter = new EventEmitter()
  
  const sub1  = emitter.subscribe('event1', ()=>{
     console.log("callback1 is called")
  })
  const sub2 = emitter.subscribe('event2', ()=>{
     console.log("callback2 is called")
  })
  const sub3 = emitter.subscribe('event1', ()=>{
     console.log("callback2second is called")
  })
  emitter.emit('event1', 1, 2);
  sub3.release();
  emitter.emit('event1', 1, 2);
  
  // same callback could subscribe 
  // on same event multiple times
  // const sub3 = emitter.subscribe('event1', callback1)