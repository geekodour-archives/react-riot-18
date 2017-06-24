import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

// import reducers
import ui from './uiReducer'
import graph from './graphReducer'


// setup apollo redux client
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/insta-prod' });
export const client = new ApolloClient({ networkInterface });

export default combineReducers({
  ui,
  graph,
  routing: routerReducer,
  apollo: client.reducer()
})
