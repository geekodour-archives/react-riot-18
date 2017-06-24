import * as types from '../constants/actionTypes';

export function parseMd(mdText) {
  return { type: types.PARSE_MD, payload: mdText };
}
