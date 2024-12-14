import { useCallback, useEffect, useRef, useState } from "react"
import './index.css'
import useFetch from "./hooks/use-fetch"
export default function SearchDropDown(){
    const [query,setQuery] = useState("");
    const {data,isLoading} = useFetch(query)

    const changeHandler =  useCallback((value)=>{
       setQuery(value)
     },[])

   
    // console.log(isLoading);
    return (
        <div className="container">
            <Search onChange={changeHandler} placeholder="serach recipie..." isLoading={isLoading}/>
            <Dropdown data={data} isLoading={isLoading}/>
        </div>
    )
}

const Search = function({placeholder,onChange,isLoading}){
    const [search,setSearch] = useState("");
    const changeHandler = (e)=>{
        const value = e.target.value;
        setSearch(value); // Update local state
    }
    useEffect(()=>{
       
      const timer =   setTimeout(()=>{
           onChange(search)
        },200)

        return ()=>{
            clearTimeout(timer)
        }


    },[search,onChange])
    return (
        <div style={{position:'relative'}}>
            <input 
            className="search" 
            type="text"
            placeholder={placeholder || "type to serach"}
             value={search}
             autoFocus
             onChange={changeHandler}
            />
        </div>
    )
}

const Dropdown = ({data,isLoading})=>{
    const [focusedIndex, setFocusedIndex] = useState(null);
    const listRef = useRef(null); //

 

    

    useEffect(()=>{
     console.log(focusedIndex);
    },[focusedIndex])

    useEffect(()=>{
        const handleKeyDown = (e)=>{
            if(e.key === 'ArrowDown'){
               setFocusedIndex((prevIndex)=> ( prevIndex === null || prevIndex === data.length-1 ? 0 : prevIndex+1))
            }
            else if(e.key === 'ArrowUp'){
                setFocusedIndex((prevIndex)=>{
                    if(prevIndex === null || prevIndex === 0){
                        return data.length-1
                    }
                    return prevIndex-1;
                })
            }
        }
      document.addEventListener('keydown',handleKeyDown);

      return ()=>{
        document.removeEventListener('keydown',handleKeyDown)
      }
    },[data])

    // useEffect(() => {
    //     if (focusedIndex !== null && listRef.current) {
    //         const focusedElement = listRef.current.children[focusedIndex];
    //         if (focusedElement) {
    //             focusedElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'nearest',
    //             });
    //         }
    //     }
    // }, [focusedIndex]);

    return (
        <div className="drop-down">
        {isLoading && <h1>Loading...</h1>}
        <ul className="drop-down-list" ref={listRef}>
            {data?.map((d, index) => (
                <li key={index}
                 className={`drop-down-item ${index === focusedIndex ? 'focused' :''}`}
                >
                    {d}
                </li>
            ))}
        </ul>
    </div>
    )
}