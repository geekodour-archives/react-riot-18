import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import logo from '../logo.svg'
import LoginAuth0 from './LoginAuth0.js'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'

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
          <LoginAuth0/>
          {props.userInfo
           ?<a className="nav-item is-tab" onClick={props.toggleDock}>MyMaps</a>
           :<p/>}
        </div>
      </div>
    </nav>
    <nav className="nav" style={{backgroundColor:'#87c8f4'}}>
      <div className="container">
        <div className="nav-right">
           <a className="nav-item">
              <Paper style={style} zDepth={1}>
                 <AutoComplete
                  hintText="Search.."
                  dataSource={props.searchResults}
                  onUpdateInput={(term)=>(props.searchActions.searchTerm(term))}
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
