import * as types from '../constants/actionTypes';


import algoliasearch from 'algoliasearch'
const client = algoliasearch('2H088GKLAD', '4413e6a2aed251d2fcb9a06a89f540ca');
const index = client.initIndex('mindmaps');

export function searchTerm(term) {
  return (dispatch)=> {
        index.search(term, {
         "hitsPerPage": "5",
         "page": "0",
         "attributesToRetrieve": "*",
         "facets": "[]"
        },(err,content)=>{
            if (err) {
              console.error(err);
              return;
            }
            let restults = content.hits.map(hit=>hit.name)
            dispatch({ type: types.UPDATE_SEARCH_RESULTS, results: restults });
        });
  };
}
