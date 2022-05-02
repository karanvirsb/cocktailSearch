import { useState, useEffect } from "react";
import axios from "axios";

function useCocktailSearch(url) {
    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let cancel;
        setIsLoading(true);
        axios({
            method: "GET",
            url: url,
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                console.log("data: ", res.data);
                setCocktails(res.data);
                setIsLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
                setIsError(true);
            });
        return () => cancel();
    }, [url]);

    return { cocktails, isLoading, isError };
}

export default useCocktailSearch;
