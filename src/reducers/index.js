import { REQUEST_USERS, RECEIVE_USERS } from '../actions'

let counter = function counter(state = { count: 0, users: [] }, action) {
  let count = state.count

  switch (action.type) {
    case 'increase':
      return { count: count + 1, users: state.users };
    case REQUEST_USERS:
      return { loading: true, count: count };
    case RECEIVE_USERS:
      return { loading: false, count: count, users: action.users };
    default:
      return state;
  }
};

export default counter
