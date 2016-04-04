import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { store } from '../rootview'
import { loadProfile } from '../../src/actions'


export default class DetailViewClass extends Component {

  render () {
    const { profile, backToListView } = this.props;
    console.log(profile);

    return (
      <div>
        <h4>Detail View</h4>
        <button onClick={backToListView}>Back to List View</button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={profile.avatar_url} />
            </div>
            <div className="col-md-6">
              <ul>
                <li>Username: {profile.login}</li>
                <li>Name: {profile.name}</li>
                <li>Company: {profile.company}</li>
                <li>Blog: {profile.blog}</li>
                <li>Location: {profile.location}</li>
                <li>
                  Email:
                  <a href={`mailto:${profile.email}`}>Send Now!</a>
                </li>
                <li>Bio: {profile.bio}</li>
                <li>Date Joined: {new Date(profile.created_at).toDateString()}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul>
                {profile.repos_fetched.map((repo, i) =>
                  <li key={i}>
                    <a href={repo.url}>{repo.name}></a>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
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
