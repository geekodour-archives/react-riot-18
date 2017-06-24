import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'

const App = props => (
  <Router>
  <div>
    <NavBar/>
    <Route exact path="/" component={Home} />
  </div>
  </Router>
)

export default App;
