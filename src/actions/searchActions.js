import * as types from '../constants/actionTypes';


import algoliasearch from 'algoliasearch'
const client = algoliasearch('2H088GKLAD', '4413e6a2aed251d2fcb9a06a89f540ca');


export function searchTerm(term) {
  return (dispatch)=> {
    dispatch({
      type: 'DO_NOTHING',
      payload
    });
  };
}
