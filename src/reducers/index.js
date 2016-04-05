import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  UPDATE_QUERY
 } from '../actions'

let counter = function counter(state = { count: 0, users: [], query: '' }, action) {
  let count = state.count
  let users = state.users
  let query = state.query
  let profile = state.profile

  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        loading: true,
        users: users,
        query: query
      };
    case RECEIVE_PROFILE:
      return {
        loading: false,
        profile: action.profile,
        users: users,
        query: query
      };
    case REQUEST_SEARCH:
      return {
        loading: true,
        users: users,
        query: action.query
      };
    case RECEIVE_SEARCH:
      return {
        loading: false,
        users: action.users,
        query: query
      };
    case UPDATE_QUERY:
      return {
        loading: false,
        users: action.query.length < 3 ? [] : users,
        query: action.query
      };
    default:
      return state;
  }
};

export default counter
