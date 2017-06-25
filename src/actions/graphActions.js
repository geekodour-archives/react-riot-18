import * as types from '../constants/actionTypes';
//import {genGraph} from '../utils'

export function updateGraph(mdText,graph) {
  return { type: types.UPDATE_GRAPH, mdText: mdText, graph: graph  };
}

export function updateGraphName(name) {
  return { type: types.UPDATE_GRAPH_NAME, name: name };
}
