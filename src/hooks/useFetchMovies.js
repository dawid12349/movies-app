import {useState, useEffect} from 'react'

function useFetchMovies(url, options ) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const jsonData = await res.json();
                setData(jsonData);
                setLoading(false);
            } catch (error){
                setError(error);
            }
        }

        fetchData();
    }, [url])

    return { data, error, loading }
}

export default useFetchMovies;
