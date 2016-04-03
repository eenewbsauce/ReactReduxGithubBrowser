import { REQUEST_USERS, RECEIVE_USERS, REQUEST_PROFILE, RECEIVE_PROFILE } from '../actions'

let counter = function counter(state = { count: 0, users: [] }, action) {
  let count = state.count

  switch (action.type) {
    case 'increase':
      return { count: count + 1, users: state.users };
    case REQUEST_USERS:
      return { loading: true, count: count };
    case RECEIVE_USERS:
      return { loading: false, count: count, users: action.users };
    case REQUEST_PROFILE:
      return { loading: true, count: count };
    case RECEIVE_PROFILE:
      return { loading: false, count: count, profile: action.profile };
    default:
      return state;
  }
};

export default counter
