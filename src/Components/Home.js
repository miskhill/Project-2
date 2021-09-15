import React from 'react'
import { Link } from 'react-router-dom'
//import About from './About'
//import axios from 'axios'



const Home = () => {
  return (
    <>
      <div>
        <h1>Movie fun</h1>
        <p>
          Check out our movie database!
        </p>
        <Link to='/result'>
          Explore our movies
        </Link>
      </div>
    </>
  )
}




export default Home