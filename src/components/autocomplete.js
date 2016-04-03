import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { search } from '../actions'
import { store } from '../../views/rootview'

class AutoCompleteClass extends Component {
  render () {
    const { query, onSearch } = this.props;

    return (
      <div>
        <input type='text' value={query} onChange={e => onSearch(e.target.value)} placeholder='search for users' />
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

function autoComplete(query) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    store.dispatch(search(query));
  }, 200)
}

let AutoComplete = connect(mapStateToProps, mapDispatchToProps)(AutoCompleteClass)

export default AutoComplete
