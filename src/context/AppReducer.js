export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVOURITES":
            if(state.favourites.find((movie) => movie.id === action.payload.id))
                return state;
        
            return {
                ...state,
                favourites:  [{...action.payload}, ...state.favourites],
             };
            
        case "REMOVE_MOVIE_FROM_FAVOURITES":
            return {
                ...state,
                favourites: state.favourites.filter( (movie) => movie.id !== action.payload),
            };
        default:
            return state;    
    }
}