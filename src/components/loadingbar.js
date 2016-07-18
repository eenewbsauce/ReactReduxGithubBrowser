import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

var classNames = require('classnames');

class LoadingBarClass extends Component {
  render () {
    const { loading } = this.props
    var loadingClass = classNames('loading', { 'isLoading': loading })

    return (
      <div className={loadingClass}></div>
    );
  }
}

LoadingBarClass.propTypes = {
  loading: PropTypes.bool
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

let LoadingBar = connect(mapStateToProps)(LoadingBarClass)

export default LoadingBar
