import React from 'react' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import MovieShow from './Components/Movies/MovieShow'
import MoviePosters from './Components/Movies/MoviePosters'
import MovieRated from './Components/Movies/MovieRated'


//! This is the base for our browser router, creating the pages of our application
//! We placed the Navbar above the switch so we have it available on every page

function App() {
  return (
    <div className='site-wrapper d-flex flex-column'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route exact path='/about' >
            <About />
          </Route>
          <Route exact path='/movies/moviePosters'>
            <MoviePosters />
          </Route>
          <Route exact path='/movies/movieRated'>
            <MovieRated />
          </Route>
          <Route exact path='/movies/movieShow'>
            <MovieShow />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )

  
}

export default App
