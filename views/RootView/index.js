import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider, connect } from 'react-redux'
import { REQUEST_USERS, RECEIVE_USERS, fetchUsers } from '../../src/actions'

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   createLogger()
// )(createStore)

export default class RootView extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //const { dispatch, selectedReddit } = this.props;
    store.dispatch(fetchUsers());
  }

  render() {
    const { value, onIncreaseClick, loading, dispatch, fetchUsers } = this.props
    return (
      <div>
        <p>{this.props.loading ? 'loading...' : ''}</p>
        <h3>Welcome To The Exercise</h3>
        {this.props.children}
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={fetchUsers}>Fetch Users</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
  fetchUsers: PropTypes.func
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0, loading: false }, action) {
  let count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case REQUEST_USERS:
      return { loading: true };
    case RECEIVE_USERS:
      return { loading: false };
    default:
      return state
  }
}

// Store
let store = createStore(counter, applyMiddleware(
  thunkMiddleware,
  createLogger())
);


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
    loading: state.loading
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
