import React, { useCallback, useMemo, useRef, useState } from "react";
import useSearchBook from "./hooks/use-book";

export default function Search() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  function serachHandler(e) {
    setValue(e.target.value);
  }
 const {book,isLoading,hasMore} =  useSearchBook(value, page);

 const observer = useRef(null);
 const lastDiv = useCallback((node)=>{

  // console.log("called");
    if(isLoading) return ;

    if(observer.current) observer.current.disconnect(); // disconnect prev observer

    observer.current = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting && hasMore){
         setPage((prev)=>prev+1)
       }
    },{

    })

    if(node) observer.current.observe(node)

 },[isLoading,hasMore])
 
  return (
    <div>
      <input value={value} type="text" onChange={serachHandler} />
      
           {
               book?.map((b,index)=>{
               return  index === book.length-1 ? (
                    <div key={b}  ref={lastDiv}>{b}</div>
                 ):(
                    <div key={b}>{b}</div>
                 )
             })
           }
           {isLoading ? <>Loading..</> : <></>}
    </div>
  );
}
