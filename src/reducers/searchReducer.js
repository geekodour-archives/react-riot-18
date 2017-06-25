import { UPDATE_SEARCH_RESULTS } from '../constants/actionTypes'

const initialState = {
        results: []
};


export default function graphReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
          return {
            ...state,
            results: action.results
          }

    default:
      return state;
  }
}
