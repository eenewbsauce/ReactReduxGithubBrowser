import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'

import { store } from '../../views/RootView'

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const INCREMENT = 'INCREMENT';
export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(users => dispatch(receiveUsers(users)));
  };
}

export function increment() {
  return {
    type: 'increase'
  };
}

export function loadProfile(userName) {
  return dispatch => {
    store.dispatch(requestProfile());
    return fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(profile => store.dispatch(receiveProfile(profile)))
      .then(() => browserHistory.push(`/detail/${userName}`));
  };
}

function requestProfile() {
  return {
    type: REQUEST_PROFILE
  };
}

function receiveProfile(profile) {
  return {
    type: RECEIVE_PROFILE,
    profile: profile
  };
}

function requestUsers() {
  return {
    type: REQUEST_PROFILE
  };
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
}
