import { useRef } from "react";

export default function useMemo(fn,args,...rest){
    const prevArgs = useRef(null);
    const prevRes = useRef(null);

    function checkParams(arg1,args2){
       if(arg1.length !== args2.length) return false;

       let i=0, j=0;

       while(i < arg1.length && j < args2.length){
        if(arg1[i] !== args2[j]){
            return false;
        }
        i++;
        j++;
       }
       return true;
    }

    if(!prevArgs.current){
        prevArgs.current = args;
        prevRes.current = fn(...rest);
    }else{
        // check if the args same
        if(checkParams(args,prevArgs.current)){
            return prevRes.current;
        }else{
            prevArgs.current=args;
           prevRes.current = fn(...rest)
        }
        
    }

    return prevRes.current

    
}

export function useCallback(){
    
}