import { PARSE_MD } from '../constants/actionTypes'

const initialState = {
        mdText : '',
        graph: {}
};


export default function graphReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case PARSE_MD:
          return {
            ...state,
            mdText: action.mdText,
            graph: action.graph
          }

    default:
      return state;
  }
}
