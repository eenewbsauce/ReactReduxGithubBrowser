import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'

import { store } from '../../views/rootview'

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const UPDATE_QUERY = 'UPDATE_QUERY';

export function search(query) {
  if (query.length >= 3) {
    return dispatch => {
      store.dispatch(requestSearch(query));
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(response => store.dispatch(receiveSearch(response.items)))
        .then(() => {
          browserHistory.push('/');
        });
    };
  } else {
    return dispatch => {
      store.dispatch(updateQuery(query));
    };
  }
}

export const updateQuery = function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query: query
  };
};

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
