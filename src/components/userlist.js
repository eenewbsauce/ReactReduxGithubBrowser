import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadProfile } from '../actions'

class UserListClass extends Component {
  render () {
    const users = this.props.users ? this.props.users : [];

    return (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, i) =>
          <tr key={i}>
            <td>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCu-a8gnOGzYBD1THxSBjEk2fVpYrdlhyFbSe87fVaKbLCwKQcCyjkCw" />
            </td>
            <td>
              {user.login}
            </td>
            <td>
              <button onClick={loadProfile(user.login)}>Details</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
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
