import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
      <div className='text-center'>
        <h1 >Randomly Generate Your Film For The Evening</h1>
        <Link to='movies/movieshow'>
          <p className="btn btn-lg btn-yellow display-flex">Generate Your Movie!!</p>
        </Link>
        <h1>
        Would you rather search Popular Movies?
        </h1>
        <Link to='movies/movieposters'>
          <p className="btn btn-lg btn-yellow display-flex">Display popular Movies</p>
        </Link>
        <h1>
        How about Top Rated?
        </h1>
        <Link to='movies/movierated'>
          <p className="btn btn-lg btn-yellow display-flex">Display Top Rated Movies</p>
        </Link>
      </div>
    </>
  )
}




export default Home

