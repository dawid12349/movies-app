import styles from './header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className = {styles.wrapper}>
            <Link to = {'/'} className = {styles.main_text}>Movies App</Link>
            <Link to = {'/Favourites'} className = {styles.watchlist_text} >Favourites</Link>
        </div>
    )
}

export default Header;
