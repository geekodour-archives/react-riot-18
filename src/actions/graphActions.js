import * as types from '../constants/actionTypes';
import {genGraph} from '../utils'

export function parseMd(mdText) {
  let graph = genGraph(mdText);
  return { type: types.PARSE_MD, mdText: mdText, graph: graph  };
}
