// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// // Components
// import MovieCard from './MovieCard'
// import MovieShow from './MovieShow'

// const MovieIndex = () => {

//   // State
//   const [ movies, setMovies ] = useState([])
//   const [ hasError, setHasError ] = useState(false)

//   //API key
//   const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         const { data } = await axios(`https://api.themoviedb.org/3/movie/550?${api}`)
//         console.log('movieIndex--->', data)
//         setMovies(data)
//       } catch (err) {
//         setHasError(true)
//       }
//     }
//     getMovies()
//   }, [])



//   return (
//     <>
//       <section className="cheese-list container mt-4">
//         <div className="row">

//           {movies.length < 0 ?

//             movies.map( movie => {
//               console.log(movie)
//               return <MovieCard key={movie.id} {...movie} />
//             })

//             :

//             <>
//               {hasError ? 
//                 <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
//                 : 
//                 <h2 className="display-5 text-center">Loading</h2> 
//               }
//             </>
        
//           }

//         </div>
//       </section>
//     </>
//   )
// }

// export default MovieIndex