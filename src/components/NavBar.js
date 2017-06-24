import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import logo from '../logo.svg'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  textAlign: 'center',
  display: 'inline-block',
  paddingLeft: '15px',
  paddingRight: '15px'
};

const NavBar = props => (
  <div className="">
  <MediaQuery maxDeviceWidth={800}>
    <AppBar
    title="markmymind"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MediaQuery>
  <MediaQuery minDeviceWidth={1224}>
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
    <nav className="nav" style={{backgroundColor:'#87c8f4'}}>
      <div className="container">
        <div className="nav-right">
           <a className="nav-item">
              <Paper style={style} zDepth={1}>
                <TextField hintText="search" />
                  <RaisedButton
                    label="Open Drawer"
                    onTouchTap={props.toggleDock}
                  />
		      </Paper>
           </a>
        </div>
      </div>
    </nav>
  </MediaQuery>
  </div>
)

export default NavBar
