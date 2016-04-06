import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
let $ = require('jquery');

import { store } from '../../views/rootview'

class InfiniteScrollClass extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    let scrollY = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let loadingOffset = 250;

    if (outerHeight - scrollY <= loadingOffset) {
      this.props.loadMore();
    }
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
