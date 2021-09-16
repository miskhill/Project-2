import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MovieRated = () => {

  const [ posters, setPosters ] = useState([])
  
  useEffect(() => {
    const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'
    const getData = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${api}`)
      setPosters(data.results)
      console.log('My Data--->', data)
    }
    getData()
  }, [])

  
  return (
      
    <div className="container mt-4">
      {posters.map((poster) => {
        
        return (
          <article key={posters.id}>
            <div>
              <img className="card-image" src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt={poster.title}/>
              <h3>
              Name: {posters.title}
              </h3>
            </div>
          </article>
        )
      }
      )}
    </div>
  )
}

export default MovieRated