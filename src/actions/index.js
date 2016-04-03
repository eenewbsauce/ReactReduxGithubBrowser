import fetch from 'isomorphic-fetch';
// import { store } from '../../views/RootView'

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const INCREMENT = 'INCREMENT';


export function fetchUsers() {
  console.log('fetching...');

  return dispatch => {
    dispatch(requestUsers());
    return fetch(`https://api.github.com/users`)
      .then(response => {
        let tester = response.json();
        return tester;
      })
      .then(users => dispatch(receiveUsers(users)));
  };
}

export function increment() {
  return {
    type: 'increase'
  };
}

function requestUsers() {
  return {
    type: REQUEST_USERS
  };
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
}
