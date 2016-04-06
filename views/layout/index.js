import React, { Component, PropTypes } from 'react'

export default class LayoutView extends Component {
  render () {
    const { main } = this.props
    return (
      <div className="layout">
        <nav className="navbar">
          <div className="container">
            <p>Ryan</p>
          </div>
        </nav>
        {main}
      </div>
    );
  }
}
