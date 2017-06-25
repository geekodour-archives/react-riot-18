import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

// actions
import * as uiActions from '../actions/uiActions'

// graphql
import { USER_QUERY } from '../queries'

// components
import Home from './Home'
import NavBar from './NavBar'

const App = props => (
  <Router>
  <div>
    <NavBar
      dockOpen={props.ui.dockOpen}
      toggleDock={props.uiActions.toggleDock} />
    <p style={{color:'#FFF'}}>{JSON.stringify(props.data)}</p>
    <Route exact path="/" component={Home} />
  </div>
  </Router>
)

// needed for proper check on user auth
//const AppWithGQLData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(App)

const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

//export default connect( mapStateToProps, mapDispatchToProps)(AppWithGQLData)
export default connect( mapStateToProps, mapDispatchToProps)(App)


//export default App;
