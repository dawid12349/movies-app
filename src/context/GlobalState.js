import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const InitialState = {
    favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
}

export const GlobalContext = createContext(InitialState);
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    useEffect(()=>{
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
    }, [state])

    const addMovieToFavourites = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie });
    }

    const removeFromFavourites = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITES", payload: id });
    }


    return (
        <GlobalContext.Provider 
            value = {{
                favourites: state.favourites,
                addMovieToFavourites,
                removeFromFavourites,
            }}
        > 
        {props.children}
        </GlobalContext.Provider>    
    )
    
}







