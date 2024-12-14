import { useEffect, useState } from "react";

export default function useFetch(query) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Clear data and skip API call if query is empty
        if (!query) {
            setData([]);
            setIsLoading(false); // Ensure loading state is off for empty query
            return;
        }

        async function fetchData() {
            try {
                setIsLoading(true); // Start loading before API call
                const res = await fetch(`https://dummyjson.com/recipes?name=${query}`);
                const result = await res.json();
                setData(result?.recipes?.map((d) => d?.name) || []); // Update data
            } catch (error) {
                setIsError(error);
            } finally {
                setIsLoading(false); // End loading after API call finishes
            }
        }

        fetchData();
    }, [query]);

    return {
        isLoading,
        data,
        isError,
    };
}
