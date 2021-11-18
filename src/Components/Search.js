import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="home-initial-message"
        />
        <span>Digite algum termo de pesquisa ou escolha uma categoria.</span>
      </div>

    );
  }
}

export default Search;
