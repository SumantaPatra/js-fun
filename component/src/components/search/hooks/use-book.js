import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";

export default function useSearchBook(query,pageNumber){
    const debounnceVal = useDebounce(query);
    const [book,setBook] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [hasMore,setHasMore] = useState(false);

    useEffect(()=>{
     setBook([])
    },[query])
    
    
  
    useEffect(()=>{
      setIsLoading(true)
      fetch(`https://openlibrary.org/search.json?q=${debounnceVal}&page=${pageNumber}`).then((res)=>res.json())
                                                  .then((data)=>{ 
                                                    setBook((prevBooks) =>
                                                        [...prevBooks, ...data.docs.map((b)=>b.title)]
                                                      );
                                                      setIsLoading(false);
                                                      setHasMore(data.docs.length > 0);
                                                  }).catch((err)=>{

                                                  }).finally(()=>{
                                                    setIsLoading(false)
                                                  })                                

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pageNumber, debounnceVal])

    return {book,isLoading,hasMore}

}