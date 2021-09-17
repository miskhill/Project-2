import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
      <div className='hero text-center flex-grow-1 flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='display-4 pb-5'>Movie Generator</h1>
        <h1 className='display-5'>Randomly Generate Your Film For The Evening</h1>
        <Link to='movies/movieshow'>
          <p className="btn btn-lg btn-yellow display-flex">Generate Your Movie!!</p>
        </Link>
        <h1>
        Would you rather search Popular Movies?
        </h1>
        <Link to='movies/movieposters'>
          <p className="btn btn-lg btn-purple display-flex">Display popular Movies</p>
        </Link>
        <h1>
        How about Top Rated?
        </h1>
        <Link to='movies/movierated'>
          <p className="btn btn-lg btn-purple display-flex">Display Top Rated Movies</p>
        </Link>
      </div>
    </>
  )
}




export default Home

