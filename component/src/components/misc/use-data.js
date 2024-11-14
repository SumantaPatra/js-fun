import { useEffect, useState } from "react";

export default function useData(offset){
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [hasMore,setHasMore] = useState(true);


    useEffect(()=>{
       const fetchData = async()=>{
            const res = await fetch(`https://dummyjson.com/products?offset=${offset}`);
            const prod = await res.json();
            if(prod.products.length === 0) setHasMore(false)
            setData([...data,...prod.products])
       }

       try {
        setIsLoading(true);
        fetchData()
       } catch (error) {
        
       }finally{
        setIsLoading(false)
       }

    },[offset])






    return {
        data,
        isLoading,
        hasMore
    }
}