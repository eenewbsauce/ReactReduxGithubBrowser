import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { search, updateQuery } from '../actions'
import { store } from '../../views/rootview'

class AutoCompleteClass extends Component {
  render () {
    const { query, onSearch } = this.props;

    return (
      <div>
        <input type='text' value={query} onChange={e => onSearch(e, e.target.value)} placeholder='search for users' />
        <p></p>
      </div>
    );
  }
}

AutoCompleteClass.propTypes = {
  onSearch: PropTypes.func
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: autoComplete
  }
}

let timeout;

function autoComplete(e, query) {
  // //search immediately on backspace
  // if (e.keyCode === 8) {
  //   store.dispatch(search(query));
  // }
  store.dispatch(updateQuery(query));
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    store.dispatch(search(query));
  }, 300)
}

let AutoComplete = connect(mapStateToProps, mapDispatchToProps)(AutoCompleteClass)

export default AutoComplete
