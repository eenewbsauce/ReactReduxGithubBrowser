import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

//import { store } from '../users'
import { fetchUsers, increment } from '../../src/actions'
import configureStore from '../../configurestore'
import LayoutView  from '../layout';
import UserView  from '../users';
import DetailView  from '../detail';

require('../../styles/bootstrap.css')
export default class RootView extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={LayoutView}>
            <Route path="/" component={{main:UserView}} />
            <Route path="/detail/:username" component={{main:DetailView}} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export const store = configureStore();
