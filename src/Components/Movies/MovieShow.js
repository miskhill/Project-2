import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieShow = ( { error } ) => {

  // State
  const [ movies , setMovies ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  
  // Params
  const { id } = useParams()
  //API key
  const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'
  //function to generate a random number 650

  useEffect(() => {
    const random = Math.floor(Math.random() * 650)
    const getMovies = async () => {
      try {
        const { data } = await axios(`https://api.themoviedb.org/3/movie/${random}?${api}`)
        console.log('datacheck--->', data)
        setMovies(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getMovies()
  }, [id])

  useEffect(() => console.log(movies), [movies])
  //brings back the movie page individually
  return (
    <>
      { movies ? 
        <div className="container mt-4">
          <h2>{movies.title}</h2>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6" >
              <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
            </div>
            <div className="col-12 col-md-6" >
              <h4><span>🎟</span> Status</h4>
              <p>{movies.status}</p>
              <hr />
              <h4><span>🎬</span> Title</h4>
              <p className="lead">{movies.title}</p>
              <hr />
              <h4><span>🎦</span> Tag Line</h4>
              <p className="lead">{movies.tagline}</p>
              <hr />
              <h4><span>📄</span> Overview</h4>
              <p className="lead">{movies.overview}</p>
              <hr />
              <Link to="/" className="btn btn-lg btn-yellow">Back to Home</Link>
            </div>
          </div>
        </div>
        :

        <>
          {hasError ? 
            <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
            : 
            <img className="spinner" src={error} alt="Error gif" />
          }
        </>
      
      
      }
    </>
  )
}

export default MovieShow