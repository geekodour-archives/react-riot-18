import { UPDATE_GRAPH, UPDATE_GRAPH_NAME } from '../constants/actionTypes'

const initialState = {
        mdText : '',
        graphName: '',
        graph: {}
};


export default function graphReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GRAPH:
          return {
            ...state,
            mdText: action.mdText,
            graph: action.graph
          }

    case UPDATE_GRAPH_NAME:
          return {
            ...state,
            graphName: action.name
          }

    default:
      return state;
  }
}
