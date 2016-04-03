import React, { Component, PropTypes } from 'react'

export default class UserList extends Component {
  // displayUsers() {
  //   if (users) {
  //     return users.map((user, i) => {
  //       <li key={i}>{user.login}</li>
  //     });
  //   } else {
  //     return <li>No users found</li>
  //   }
  // }

  render () {
    const users = this.props.users ? this.props.users : [];
    return (
      <ul>
        {users.map((user, i) => <li key={i}>{user.login}</li>)}
      </ul>
    );
  }
}
