import useFavourites from '../../hooks/useFavourites'
import useFetchMovies from '../../hooks/useFetchMovies';

import styles from './MoviePage.module.css';
import Spinner from '../../components/Spinner/Spinner';
import Rating from '../../components/Rating/Rating';

import {FaHeart, FaHeartBroken, FaEye} from 'react-icons/fa';

const API_KEY =  process.env.REACT_APP_API_KEY;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


function MoviePage(props) {
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}&language=en-US`;
    const {data, error, loading} = useFetchMovies(DETAILS_API); 
    const {is, addMovieToFavourites, removeFromFavourites} = useFavourites(props.match.params.id);

    const formatToCurrency = amount => {
        if(amount == 0) return undefined;
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + ' $';
    };

    if(loading) return <Spinner bool = {loading}/>
    else {
        return (
                <div className = {styles.movie_page}>
                        <div className = {styles.poster}>
                            <img src = {IMGPATH + data.poster_path}/>
                            <div className = {styles.button_group}>
                                <a href = {data.homepage}><FaEye color = "#8377D1"> </FaEye>Watch now!</a>
                                {is == false ? 
                                    <a onClick = {()=> addMovieToFavourites(data)} >
                                        <FaHeart color = 'green' /> 
                                        Favourites
                                    </a> :
                                    <a onClick = {()=>removeFromFavourites(data.id)}> 
                                        <FaHeartBroken  color= 'red'/>
                                        Favourites
                                    </a>}
                                
                            </div>
                        </div>
                        <div className = {styles.info}>
                            <div className = {styles.heading}>
                                <div className = {styles.title}>
                                    {data.title}
                                </div>
                                <div className = {styles.subinfo}>
                                    <div className = {styles.subinfo1}>
                                        <p>{data.release_date.split('-')[0]}</p>
                                        <p>{data.genres.map((g, idx)=> (<span key= {idx}>, {g.name}</span>))}</p>
                                    </div>
                                    <div className = {styles.subinfo2}>
                                        <Rating rating = {data.vote_average}/>
                                        <p>{data.vote_count} votes</p>
                                    </div>
                                </div>
                            </div>
                            <div className= {styles.overview}>
                               <p>{data.overview}</p>
                            </div>
                            <div className = {styles.footer}>
                                <p><b>Production companies:</b> {data.production_companies.map((c,idx)=> (<span key = {idx}>{c.name}, </span>))}</p>
                                <p><b>Production countries:</b> {data.production_countries.map((c,idx) => (<span key = {idx}>{c.name}, </span>))}</p>
                                <p><b>Langauges:</b> {data.spoken_languages.map((l, idx) => (<span key = {idx}>{l.iso_639_1}, </span>))}  </p>
                                <p><b>Duration:</b> {Math.floor(data.runtime / 60) || 0} hours and {data.runtime % 60} minutes</p>
                                <p><b>Budget:</b> {formatToCurrency(data.budget) || "-"}</p>
                                <p><b>Revenue:</b> {formatToCurrency(data.revenue)|| "-"}</p>
                                <p><b>Tags:</b> {data.tagline || "-"}</p>
                            </div>
                        </div>
                </div>
            )
    }
}

export default MoviePage
