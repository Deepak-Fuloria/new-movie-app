import React from 'react'
import "./header.css"
import Logo from "../public/images/myLogo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header-container">
        <div className="header-logo">
          <NavLink to="/"><img src={Logo} alt="logo" className="logo" /></NavLink>
        </div>
      <div className="header-links">
         <NavLink to="/">HOME</NavLink>
         <NavLink to="movies/movie">MOVIES</NavLink>
         <NavLink to="series/tv">TV SERIES</NavLink> 
         <NavLink to="/search">SEARCH</NavLink> 
      </div>
       

    </div>
    </>
  )
}

export default Header