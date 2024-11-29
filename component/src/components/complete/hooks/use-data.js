import { useEffect, useState } from "react";

export default function UseData(offset){
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [pages,setPages] = useState(1);


    useEffect(()=>{
       async function fetchData(){
          const res = await fetch(`https://dummyjson.com/products?skip=${offset}`);
          const prod = await res.json();
          setData([...prod?.products])
          setPages(Math.ceil(prod?.total/prod?.limit))
          // setData((data)=> [...new Set([...data?.products,...data])])
       }
       try {
         setIsLoading(true);
         fetchData();
       } catch (error) {
        
       }finally{
        setIsLoading(false);
       }
    },[offset])


    return {
        data,
        isLoading,
        pages,
        setData
    }

}