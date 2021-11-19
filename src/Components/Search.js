import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { searchInput, onChangeHandler } = this.props;

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ searchInput }
          onChange={ onChangeHandler }
        />
      </div>

    );
  }
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Search;
