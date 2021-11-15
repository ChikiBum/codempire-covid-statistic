import { useEffect, useState } from "react";


export const useCountries = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] =  useState(true);
    const [isError, setIsError] =  useState(false);

    useEffect(() => {
    const getContries = async() => {
        setIsLoading(true);
            try {
                const response = await fetch('https://api.covid19api.com/summary');
                const { Countries, error } = await response.json();
                if (error) {
                    throw new Error(error.message);
                }
                setData(Countries.slice(0, 5) );
                setIsError(false);
            } catch (error){
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getContries();
    }, []);

    return {
        isLoading,
        data,
        isError
    }
}