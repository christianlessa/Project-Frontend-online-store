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
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </span>
      </div>

    );
  }
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Search;
