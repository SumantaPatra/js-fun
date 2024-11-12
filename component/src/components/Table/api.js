import { useEffect, useState } from "react";

export default function useData(skip=0){
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [hasMore,setHasMore] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
             const res = await fetch(`https://dummyjson.com/products?skip=${skip}`)
             const products = await res.json();
             setData((prev)=>[...prev,...products.products])
             setHasMore(products?.products.length > 0)
        }

        try {
            setIsLoading(true)
            fetchData()
        } catch (error) {
            
        }finally{
           setIsLoading(false)
        }

    },[skip])

    return {
        data,
        isLoading,
        hasMore
    }
}