import useFavourites from '../../hooks/useFavourites'
import { Link} from 'react-router-dom';
import styles from './card.module.css';
import {FaHeart, FaHeartBroken} from 'react-icons/fa';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Card(props) {
    const {is, addMovieToFavourites, removeFromFavourites} = useFavourites(props.movie.id)

    const getClassRating = rating => {
        if(rating > 0 && rating <= 5) {
            return styles.red_rating;
        } else if(rating > 5 && rating <= 7.5) {
            return styles.yellow_rating;
        }
        return styles.green_rating;
    }

    return (
        <div className = {styles.card}>
            {!is ? 
                <FaHeart className = {styles.icon} color = 'red'  title = {"add to favorites"} onClick = {()=> addMovieToFavourites(props.movie)}/> : 
                <FaHeartBroken className = {styles.icon} color= 'red' title = {"remove from favorites"} onClick = {()=> removeFromFavourites(props.movie.id)} />}
            <img src = {IMGPATH + props.movie.poster_path} alt="No Image found" onError = {(e) => {e.target.onerror = null; e.target.src='NoImage.jpg'}}></img>
            <Link to = {`/movie/${props.movie.id}`} movie = {props.movie} id = {props.movie.id} className = {styles.card_content}>
                <h4>{props.movie.title}</h4>
                <span className = {getClassRating(props.movie.vote_average)}>{props.movie.vote_average}</span>
            </Link>
        </div>
    )
}




export default Card
