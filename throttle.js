// wont work for lat args call with function when its in throttle period

function throttle1(cb,delay=100){
    let throttle = false;
    return function(...args){
      if(throttle){
        return 
      }
      
      throttle = true;

      setTimeout(()=>{
        cb.call(this,...args)
        throttle=false;
      },delay)
    }

}

// last function is called when throttle peroid end 
function throttle2(cb,delay=100){
    let throttle = false;
    let lastArgs = null;

    
    return function (...args){
      if(!throttle){
        cb.call(...args);
        throttle = true;

        setTimeout(()=>{
          throttle = false;
          lastArgs && cb.call(this,...lastArgs)
        },delay)
      }else{
        lastArgs = args;
      }
    }

}

