import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'

import { fetchUsers, increment } from '../../src/actions'
import configureStore from '../../configurestore'
import { UserList, AutoComplete } from '../../src/components'
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
          <Route path="/" component={App}/>
          <Route path="/detail/:username" component={DetailView}/>
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
        <p>{this.props.loading ? 'loading...' : ''}</p>
        <h3>Github User Search</h3>
        <AutoComplete />
        {this.props.children}
        <UserList users={this.props.users}/>
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
