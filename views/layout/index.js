import React, { Component, PropTypes } from 'react'

export default class LayoutView extends Component {
  render () {
    const { main } = this.props
    return (
      <div className="container">
        {main}
      </div>
    );
  }
}
