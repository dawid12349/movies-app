import styles from './Search.module.css'
function Search(props) {
    return (
        <div className = {styles.search}>
            <input onKeyDown = {(e)=> props.handleOnChange(props.keyword, e.key === 'Enter')} onChange= {(e)=> props.handleOnChange(e.target.value)} value = {props.keyword} className = {styles.search_input} placeholder="Enter..." type = "text" name = 'search_input'/>
        </div>
    )
}

export default Search
