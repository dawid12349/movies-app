import {useState} from 'react';
import styles from './Rating.module.css';

import {FaStarHalf, FaStar} from 'react-icons/fa';


function Rating({rating = 0}) {
    const stars = new Array(5).fill(0);
    const rating10 = rating * 10;
    for(let i = 0; i < stars.length; i++){
        if(i < Math.floor(rating / 2)) 
            stars[i] = 1;
        else {
             if(rating10 % 20 >= 10)
                stars[i] = 2;
             break;    
            }    
    }

    return (
        <div className = {styles.rating}>
            {stars.map( (v, idx)=> {
                 if(v == 1) return <FaStar key = {idx} color = 'gold' title = {`${rating}/10`}/> 
                 else if(v==2) return <FaStarHalf key = {idx} color = 'gold' title = {`${rating}/10`}/>
            })}
        </div>
    )
}

export default Rating
