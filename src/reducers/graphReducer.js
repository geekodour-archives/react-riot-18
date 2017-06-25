import { UPDATE_GRAPH, UPDATE_GRAPH_NAME, UPDATE_EDITOR_ERROR, UPDATE_GRAPH_NAME_ERROR, UPDATE_EDITOR_DEFAULT_TEXT } from '../constants/actionTypes'

const initialState = {
        mdText : '',
        graphName: '',
        graph: {nodes:[],edges:[]},
        editorError: '',
        graphNameError: '',
        editorDefaultText: ''
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

    case UPDATE_EDITOR_DEFAULT_TEXT:
          return {
            ...state,
            editorDefaultText: action.defaultText
          }

    default:
      return state;
  }
}
