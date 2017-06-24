import * as types from '../constants/actionTypes';


export function dimToggle() {
  return { type: types.DIM_TOGGLE };
}

export function toggleSaveDialog() {
  return { type: types.TOGGLE_SAVE_DIALOG };
}

export function toggleShareDialog() {
  return { type: types.TOGGLE_SHARE_DIALOG };
}


export function doNothing(payload) {
  return (dispatch)=> {
    dispatch({
      type: 'DO_NOTHING',
      payload
    });
  };
}
