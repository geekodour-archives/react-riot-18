import { DIM_TOGGLE, TOGGLE_DOCK, TOGGLE_SAVE_DIALOG, TOGGLE_SHARE_DIALOG } from '../constants/actionTypes'

const initialState = {
        dimToggle : false,
        saveDialogOpen: false,
        shareDialogOpen: false,
        dockOpen: false
};


export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DIM_TOGGLE:
          return {
            ...state,
            dimToggle: !state.dimToggle
          }
    case TOGGLE_SAVE_DIALOG:
          return {
            ...state,
            saveDialogOpen: !state.saveDialogOpen
          }
    case TOGGLE_SHARE_DIALOG:
          return {
            ...state,
            shareDialogOpen: !state.shareDialogOpen
          }
    case TOGGLE_DOCK:
          return {
            ...state,
            dockOpen: !state.dockOpen
          }
    default:
      return state;
  }
}
