import { UPDATE_SEARCH_RESULTS, UPDATE_SELECTED_TERM } from '../constants/actionTypes'

const initialState = {
        results: [],
        actualResults: [],
        selectedMap: {}
};


export default function graphReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
          return {
            ...state,
            results: action.results.map(hit=>hit.name),
            actualResults : action.results
          }

    case UPDATE_SELECTED_TERM:
          return {
            ...state,
            selectedMap: state.actualRestults[action.index]
          }

    default:
      return state;
  }
}
