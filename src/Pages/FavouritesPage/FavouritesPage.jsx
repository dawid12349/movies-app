import styles from './FavouritesPage.module.css'
import MovieList from '../../components/MoviesList/MovieList'
import useFavourites from '../../hooks/useFavourites'


function FavouritesPage() {
    const {favourites} = useFavourites()
    return (
        <div className = {styles.favorites}>
            <h2>Your favourites:</h2>
            <MovieList delete = {true} movies = {favourites}></MovieList>
        </div>
    )
}

export default FavouritesPage;
