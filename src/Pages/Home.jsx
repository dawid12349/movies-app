import {useState} from 'react';
import MoviesList from '../components/MoviesList/MovieList';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner/Spinner';

import useFetchMovies from '../hooks/useFetchMovies';

const {REACT_APP_API_KEY} = process.env;
const HOME_API = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&query=''&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=''&page=1`;

function Home() {
    const [keyword, setKeyword] = useState(''); 
    const [url, setUrl] = useState(HOME_API);
    const {data, error, loading} = useFetchMovies(url);
  
    const handleKeywordChange = (input, enter = false) => {
        if(enter) {
            if(keyword === '') setUrl(HOME_API)
            else {  
                setUrl( ()=> {
                const splited = SEARCH_API.split('&');
                splited[1] = `query=${keyword}`; 
                return splited.join('&');
              });
            }
            setKeyword('');
        }
        else setKeyword(input);
    }
  
    const  handlePageChange = npage => {
        setUrl(prev => {
          const splited = prev.split('&');
          splited[2] = `page=${npage}`;
          return splited.join('&');
        })
    } 
  

    return (
        <>
         <Search handleOnChange={handleKeywordChange} keyword = {keyword} />
          {loading ? <><Spinner visibilty = {loading}/></> :
            <>
              <Pagination page = {data.page} totalPages = {data.total_pages} handlePageChange = {handlePageChange}/>
              <MoviesList delete = {false} movies = {data.results}/>
            </>
          }
        </>
    )
}
export default Home;