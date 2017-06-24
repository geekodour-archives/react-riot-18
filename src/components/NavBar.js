import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg' 

const NavBar = props => (
  <nav className="nav" style={{backgroundColor:'#87c8f4'}}>
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item">
          <img src={logo} alt="poop" className="logomark"/>
        </Link>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu">
        <a className="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>
)


export default NavBar
