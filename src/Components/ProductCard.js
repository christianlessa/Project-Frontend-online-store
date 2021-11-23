import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const {
      price,
      thumbnail,
      title,
      id,
      addToCart,
      item,
      freeShipping,
    } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <div className="product-card-details">
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } width="100px" />
            <p>{ price }</p>
          </div>
          <div>
            <span>
              {
                freeShipping ? (
                  <span data-testid="free-shipping">Frete Grátis</span>
                ) : null
              }
            </span>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(item) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
