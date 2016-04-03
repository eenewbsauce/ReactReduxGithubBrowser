import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadProfile } from '../actions'

class UserListClass extends Component {
  render () {
    const users = this.props.users ? this.props.users : [];

    return (
      <ul>
        {users.map((user, i) =>
          <li key={i} onClick={loadProfile(user.login)}>{user.login}</li>
        )}
      </ul>
    );
  }
}

UserListClass.propTypes = {
  users: PropTypes.array
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    loadProfile: (username) => dispatch(loadProfile(username))
  }
}

let UserList = connect(mapDispatchToProps)(UserListClass)

export default UserList
