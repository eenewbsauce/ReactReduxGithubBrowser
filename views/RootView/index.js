import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { fetchUsers, increment } from '../../src/actions'
import configureStore from '../../configurestore'
import UserList from '../../src/components/userlist'
import DetailView  from '../detail';

//const history = syncHistoryWithStore(browserHistory, store)

export default class RootView extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="/detail/:username" component={DetailView}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

class AppContainer extends Component {
  componentDidMount() {
    store.dispatch(fetchUsers());
  }

  render() {
    const { value, onIncreaseClick, loading, fetchUsers, backToListView } = this.props
    return (
      <div>
        <h3>Welcome To The Exercise</h3>
        {this.props.children}
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={fetchUsers}>Fetch Users</button>
        <button onClick={backToListView}>List View</button>
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
    fetchUsers: () => dispatch(fetchUsers()),
    backToListView: () => dispatch(push('/'))
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
