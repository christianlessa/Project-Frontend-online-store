import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { price, thumbnail, title } = this.props;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } width="100px" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
