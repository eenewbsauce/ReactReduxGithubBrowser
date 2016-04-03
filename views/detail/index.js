import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { store } from '../RootView'
import { loadProfile } from '../../src/actions'


export default class DetailViewClass extends Component {
  // componentDidMount() {
  //   //let username = this.props.location.pathname.split('/')[2];
  //   store.dispatch(loadProfile(params.userName));
  // }

  render () {
    const { profile, backToListView } = this.props;
    console.log(profile);

    return (
      <div>
        <h4>Detail View</h4>
        <button onClick={backToListView}>Back to List View</button>
        <p>{profile ? profile.name : false}</p>
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    backToListView: () => browserHistory.push('/')
  }
}

let DetailView = connect(mapStateToProps, mapDispatchToProps)(DetailViewClass)

export default DetailView
