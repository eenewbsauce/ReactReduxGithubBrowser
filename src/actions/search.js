import fetch from 'isomorphic-fetch';

import { store } from '../../views/rootview'

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export function search(query) {

  return dispatch => {
    store.dispatch(requestSearch(query));
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(response => response.json())
      .then(response => store.dispatch(receiveSearch(response.items)));
  };
}

function requestSearch(query) {
  return {
    type: REQUEST_SEARCH,
    query: query
  };
}

function receiveSearch(users) {
  return {
    type: RECEIVE_SEARCH,
    users: users
  };
}
