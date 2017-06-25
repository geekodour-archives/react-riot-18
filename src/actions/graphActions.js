import * as types from '../constants/actionTypes';
//import {genGraph} from '../utils'

export function updateGraph(mdText,graph) {
  return { type: types.UPDATE_GRAPH, mdText: mdText, graph: graph  };
}

export function updateGraphName(name) {
  return { type: types.UPDATE_GRAPH_NAME, name: name };
}

export function updateEditorError(errorText) {
  return { type: types.UPDATE_EDITOR_ERROR, errorText: errorText };
}

export function updateGraphNameError(errorText) {
  return { type: types.UPDATE_GRAPH_NAME_ERROR, errorText: errorText };
}

export function updateEditorDefaultText(defaultText) {
  return { type: types.UPDATE_GRAPH_NAME_ERROR, defaultText: defaultText };
}
