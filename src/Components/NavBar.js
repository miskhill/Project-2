import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  //const history = useHistory()
  const location = useLocation()

  useEffect(() => {

  }, [location.pathname])

  return (
    <div>
      <div>
        <div>
          <Link to=''>🍿</Link>
        </div>
        <ul>
          <li>
            <Link to='/Result'>See All Movies</Link>
          </li>
          <li>
            <Link to='/about'>About our project</Link>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default NavBar