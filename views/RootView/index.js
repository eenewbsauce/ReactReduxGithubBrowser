import React from 'react';
//import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


export default class RootView extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <div>
        <h3>Welcome To The Exercise</h3>
        {this.props.children}
      </div>
    );
  }
}
