import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  //const history = useHistory()
  const location = useLocation()

  useEffect(() => {

  }, [location.pathname])

  return (
    <div className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to=''>🍿</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/about'>About our project</Link>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default NavBar