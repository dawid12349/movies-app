import {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

function useFavourites(id) {
    const {favourites, removeFromFavourites, addMovieToFavourites} = useContext(GlobalContext);
    const [is, setIS] = useState(favourites.find(movie => movie.id == id) !== undefined);
    
    useEffect(()=>{
            setIS(favourites.find(movie => movie.id == id) !== undefined);
    }, [favourites]);


    return {is, favourites, removeFromFavourites, addMovieToFavourites};
}

export default useFavourites;
