import {useState, useEffect} from 'react';
import styles from './Spinner.module.css'

function Spinner({bool}) {
    const [visibile, setVisible] = useState(true);
    useEffect(() => {
        setVisible(false);
    }, [bool])
    return visibile ?  <div className = {styles.loader}></div> : <div/>

}

export default Spinner
