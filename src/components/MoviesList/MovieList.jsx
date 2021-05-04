import styles from './MovieList.module.css'
import Card from '../Card/Card'
function MovieList(props) {

    return (
            <>
            <div className =  {styles.movie_list}>
                {props.movies.length > 0 && props.movies.map((m, id)=> (<Card movie = {m}  delete = {props.delete} key = {id}/>))}
            </div>
            </>

    )
}

export default MovieList
