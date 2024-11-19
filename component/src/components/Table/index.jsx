import { useCallback, useRef, useState } from "react";
import useData from "./api";
import { useEffect } from "react";
import "./table.css";

const Table = () => {
    const[skip,setSkip] = useState(0);
  const { data, isLoading,hasMore } = useData(skip);
  const [sorted, setSorted] = useState(data);
  const [searchedVal, setSearchVal] = useState("");

  const [config, setConfig] = useState({
    price: {
      direction: 0,
    },
    rating: {
      direction: 0,
    },
    title: {
      direction: 0,
    },
  });

  const ref = useRef(null);

  const scrollHandler = useCallback((value)=>{

    if(isLoading) return ;

    if(ref.current) ref.current.disconnect(); // disconnect prev
      
     ref.current = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting && hasMore){
            setSkip((skip)=>skip+30)
        }
     })

     if(value) ref.current.observe(value);

  },[isLoading,hasMore])



  const sortData = (key) => {
    // Create a shallow copy of the products array to avoid modifying the original data
    const temp = [...sorted];

    // console.log(temp);

    switch (config[key].direction) {
      case 1:
        temp.sort((p1, p2) =>
          typeof p1[key] === "string"
            ? p1[key].localeCompare(p2[key])
            : p1[key] - p2[key]
        );
        setConfig((c) => ({
          ...c,
          [key]: {
            direction: -1,
          },
        }));
        setSorted(temp);
        break;
      case -1:
        temp.sort((p1, p2) =>
          typeof p1[key] === "string"
            ? p2[key].localeCompare(p1[key])
            : p2[key] - p1[key]
        );
        setConfig((c) => ({
          ...c,
          [key]: {
            direction: 1,
          },
        }));
        setSorted(temp);
        break;
      default:
        temp.sort((p1, p2) =>
          typeof p1[key] === "string"
            ? p1[key].localeCompare(p2[key])
            : p1[key] - p2[key]
        );
        setConfig((c) => ({
          ...c,
          [key]: {
            direction: -1,
          },
        }));
        setSorted(temp);
        break;
    }
  };

  const searchTitle = (value) => {
    setSearchVal(value);
    if (value === "") {
      setSorted(data?.products);
    } else {
      const filtered = data?.products?.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      setSorted(filtered);
    }
  };

  useEffect(() => {
    setSorted(data);
  }, [data]);

  return (
    <div>
      <div>
        <input
          value={searchedVal}
          type="text"
          onChange={(e) => searchTitle(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <th>
            Title
            <button onClick={() => sortData("title")}>
              sort {config.title.direction === -1 ? "desc" : "asc"}
            </button>
          </th>

          <th>
            Price
            <button onClick={() => sortData("price")}>
              sort {config.price.direction === -1 ? "desc" : "asc"}
            </button>
          </th>

          <th>
            Rating
            <button onClick={() => sortData("rating")}>
              sort {config.rating.direction === -1 ? "desc" : "asc"}
            </button>
          </th>
        </thead>
       <div style={{maxHeight:"300px", overflowY:"scroll"}}>
       <tbody>
        {sorted?.map((p,index) => {
           return index === data.length-1 ? (
            <tr key={index} ref={scrollHandler}>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>{p.rating}</td>
           </tr>
           ) : (
            <tr key={index}>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>{p.rating}</td>
           </tr>
           )

        })}
        </tbody>
       </div>
        
      </table>
    </div>
  );
};

export default Table;
