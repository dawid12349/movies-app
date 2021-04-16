import {BrowserRouter as Router, Route} from 'react-router-dom'

import {GlobalProvider} from './context/GlobalState'

import Header from './components/Header/Header.jsx'
import Container from './components/Container/Container'

import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage/MoviePage'
import FavouritesPage from './Pages/FavouritesPage/FavouritesPage'
import './App.css'

function App() {
   return (
    <GlobalProvider>
      <Router>
        <>  
          <Header/>
          <Container>
                <Route path = {["/", "/home"]} exact component = {props => <Home {...props} />}/>
                <Route path = "/movie/:id"  component = {MoviePage} />
                <Route path = '/Favourites' exact component = {FavouritesPage}  />
          </Container>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
