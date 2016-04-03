import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { fetchUsers, increment } from '../../src/actions'
import configureStore from '../../configurestore'
import UserList from '../../src/components/userlist'

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

class AppContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    //const { dispatch, selectedReddit } = this.props;
    store.dispatch(fetchUsers());
  }

  render() {
    const { value, onIncreaseClick, loading, fetchUsers } = this.props
    return (
      <div>
        <h3>Welcome To The Exercise</h3>
        {this.props.children}
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={fetchUsers}>Fetch Users</button>
        <UserList users={this.props.users}/>
        <p>{this.props.loading ? 'loading...' : ''}</p>
      </div>
    )
  }
}

AppContainer.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
  fetchUsers: PropTypes.func
}

export const store = configureStore();

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
    loading: state.loading,
    users: state.users
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increment()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
