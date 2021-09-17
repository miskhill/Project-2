import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MovieRated = () => {

  const [ posters, setPosters ] = useState([])
  
  useEffect(() => {
    const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'
    const getData = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${api}`)
      console.log('My Data--->', data)
      setPosters(data.results)
      
    }
    getData()
  }, [])

  
  return (
      
    <div className='movies-list container mt-4'>
      <div className='row'>
        {posters.map((poster) => {
          return (
            <article key={posters.id} className='col-12 col-md-6 col-lg-3 mb-4' >
              <div className='card text-center h-100'>
                <img className='card-image' src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt={poster.title}/>
                <h5 className='card-header'>
                  {poster.title}
                </h5>
              </div>
            </article>
          )
        }
        )}
      </div>
    </div>
  )
}

export default MovieRated