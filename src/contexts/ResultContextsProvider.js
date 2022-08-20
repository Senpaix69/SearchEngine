import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        await fetch(`${baseURL}${type}`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Key': '8af0588346msh7d93fee7a84e5dep123274jsn83d442f04bc8',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        }).then((res) => res.json()).then((data) => {
            if (type.includes('/news')) {
                setResult(data.entries);
            } else if (type.includes('/image')) {
                setResult(data.image_results);
            } else {
                setResult(data.results)
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }
    return (
        <ResultContext.Provider value={{ getResults, result, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);