import {
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_PROFILE,
  RECEIVE_PROFILE,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
 } from '../actions'

let counter = function counter(state = { count: 0, users: [] }, action) {
  let count = state.count
  let users = state.users
  let query = state.query  

  switch (action.type) {
    case 'increase':
      return { count: count + 1, users: users };
    case REQUEST_USERS:
      return { loading: true, count: count };
    case RECEIVE_USERS:
      return {
        loading: false,
        count: count,
        users: action.users
      };
    case REQUEST_PROFILE:
      return { loading: true,
        count: count,
        users: users
      };
    case RECEIVE_PROFILE:
      return {
        loading: false,
        count: count,
        profile: action.profile,
        users: users
      };
    case REQUEST_SEARCH:
      return { loading: true,
        count: count,
        users: users,
        query: action.query
      };
    case RECEIVE_SEARCH:
      return { loading: false,
        count: count,
        users: action.users,
        query: query
      };
    default:
      return state;
  }
};

export default counter
