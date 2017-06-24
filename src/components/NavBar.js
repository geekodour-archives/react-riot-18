import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => (
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item">
          <h1 className="title is-2">MarkMyMind</h1>
        </Link>
        <Link className="nav-item is-tab is-hidden-mobile" to="/">Home</Link>
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
