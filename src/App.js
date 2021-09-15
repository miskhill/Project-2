import React from 'react' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'


//! This is the base for our browser router, creating the pages of our application
//! We placed the Navbar above the switch so we have it available on every page

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route exact path='/' >
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )

  
}

export default App
