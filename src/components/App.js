import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as uiActions from '../actions/uiActions'
import Home from './Home'
import NavBar from './NavBar'

const App = props => (
  <Router>
  <div>
    <NavBar dockOpen={props.ui.dockOpen} toggleDock={props.uiActions.toggleDock} />
    <Route exact path="/" component={Home} />
  </div>
  </Router>
)


const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(App)


//export default App;
