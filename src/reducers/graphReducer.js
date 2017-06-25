import { UPDATE_GRAPH, UPDATE_GRAPH_NAME, UPDATE_EDITOR_ERROR, UPDATE_GRAPH_NAME_ERROR } from '../constants/actionTypes'

const initialState = {
        mdText : '',
        graphName: '',
        graph: {nodes:[],edges:[]},
        editorError: '',
        graphNameError: ''
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

    case UPDATE_EDITOR_ERROR:
          return {
            ...state,
            editorError: action.errorText
          }

    case UPDATE_GRAPH_NAME_ERROR:
          return {
            ...state,
            graphNameError: action.errorText
          }

    default:
      return state;
  }
}
