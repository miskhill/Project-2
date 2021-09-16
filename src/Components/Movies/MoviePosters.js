// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const MoviePosters = () => {
//   const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'
//   const [posters, setPosters] = useState([])

  
// }

// export default MoviePosters

//   //display movies

//   // 12 films as defined by react/bootstrap
//   //function to generate 12 random films data
//   //Use effect to randomise on every page load
  
//   const [posters, setPosters] = useState([])
  
// useEffect(() => {
//   const random = Math.floor(Math.random() * 500) + 1
  
//   const getPosters = async () => {
//     try {
//       const { data } = await axios(`https://api.themoviedb.org/3/movie/popular?page=${random}&api_key=${api}`)
//       setPosters(data.results.slice(0, 12))
//       console.log('data', data)
      
//     } catch (err) {
//       console.log('LOL', posters)
//     }
//     getPosters() 
//   }
// }



//function to display the 12 movie posters 
  
//   const createRandomMoviePosters = () => {
//     return moviePosterURLs.map((movie, index) => {

//       return <div key={movie.id} className={index % 2 === 0 ? 'column is-2-desktop is-4-tablet is-6-mobile grow' : 'column is-2-desktop is-4-tablet is-6-mobile grow2' }>

//         <div className='card shadow'>
//           <div className='card-image'>
//             <figure className='image is-2by3'>
//               <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
//             </figure>
//           </div>
//         </div>
//       </div>

//     })  
//   }
    
  

//   //display the posters
//   return <div className='blueBackground'>
  
//   <div className='columns is-multiline'>{createRandomMoviePosters()}</div>
//   </div>
// }
  


