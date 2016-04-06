import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { store } from '../../views/rootview'

class InfiniteScrollClass extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log('I scrolled');
  }

  render () {
    return (
      <p>chacoop</p>
    );
  }
}

InfiniteScrollClass.propTypes = {
  loading: PropTypes.bool
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //loadMore: store.dispatch(loadMore());
    loadMore: () => {console.log('load more baby')}
  }
}

let InfiniteScroll = connect(mapStateToProps, mapDispatchToProps)(InfiniteScrollClass)

export default InfiniteScroll
