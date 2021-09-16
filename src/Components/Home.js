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
      </div>
      <Link to='movies/movieposters'>
        <p>Display popular Movies</p>
      </Link>
    </>
  )
}




export default Home

