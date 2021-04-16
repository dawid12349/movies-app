import {useRef, useState, useEffect} from 'react'
import styles from './MovieList.module.css'
import Spinner from '../Spinner/Spinner'
import Card from '../Card/Card'
function MovieList(props) {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);

    const imageLoaded = () => {
        counter.current += 1
        if(counter.current >= props.movies.length);
            setLoading(false)
    }

    useEffect(()=>{
        counter.current = 0
    }, [props.movies])

    return (
            <>
            <Spinner bool = {loading}/>
            <div style = {{display: loading ? 'none' : 'grid'}} className =  {styles.movie_list}>
                {props.movies.length > 0 && props.movies.map((m, id)=> (<Card movie = {m} imageLoaded = {imageLoaded} delete = {props.delete} key = {id}/>))}
            </div>
            </>

    )
}

export default MovieList
