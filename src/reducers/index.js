import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

// import reducers
import ui from './uiReducer'
import graph from './graphReducer'
import auth from './authReducer'
import search from './searchReducer'


// setup apollo redux client
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj4bew8ree3op0142866t99ea' });

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    if (window.localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${window.localStorage.getItem('auth0IdToken')}`
    }
    next()
  },
}])


export const client = new ApolloClient({ networkInterface });

export default combineReducers({
  ui,
  graph,
  auth,
  search,
  routing: routerReducer,
  apollo: client.reducer()
})
