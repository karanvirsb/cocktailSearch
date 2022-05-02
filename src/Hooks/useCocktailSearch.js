import { useState, useEffect } from "react";
import generateHash from "../Helper/generateHash";
import memoizeAsync from "../Helper/memoizeAsync";

function useCocktailSearch(url) {
    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const config = {
            url: url,
            key: generateHash(["GET", url]),
            duration: 500000,
        };

        memoizeAsync(config, (arr) => {
            console.log(arr);
            setCocktails(arr.data);
            setIsLoading(arr.loading);
            setIsError(arr.error);
        });
    }, [url]);

    return { cocktails, isLoading, isError };
}

export default useCocktailSearch;
