import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

// actions
import * as uiActions from '../actions/uiActions'
import * as searchActions from '../actions/searchActions'

// graphql
import { USER_QUERY } from '../queries'

// components
import Home from './Home'
import NavBar from './NavBar'

const App = props => (
  <Router>
  <div>
    <NavBar
      userInfo={props.data.user}
      searchResults={props.search.results}
      searchActions={props.searchActions}
      dockOpen={props.ui.dockOpen}
      toggleDock={props.uiActions.toggleDock} />
    <Route exact path="/" component={Home} />
  </div>
  </Router>
)

// needed for proper check on user auth
const AppWithGQLData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(App)

const mapStateToProps = state => ( { ui: state.ui, search: state.search });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(AppWithGQLData)
//export default connect( mapStateToProps, mapDispatchToProps)(App)


//export default App;
