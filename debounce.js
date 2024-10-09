function debounce(cb,delay=1000){
    
    let timerId ;
    return function(...args){
      if(timerId){
        clearTimeout(timerId)
      }
      timerId=setTimeout(()=>{
        cb.call(this,...args)
      },delay)
    }

}

function fetchApi(){
    // fetching
}


const debounced = debounce(fetchApi,100)

debounced("sumanata")