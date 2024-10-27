import { useEffect, useRef, useState } from "react";

export default function useDebounce(query, timer = 500) {
  const [serach, setSearch] = useState(query);
  const timerRef = useRef(null);
  

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSearch(query);
    }, timer);

   
    return () => clearTimeout(timerRef.current);

  }, [query, timer]);

  return serach;
}
