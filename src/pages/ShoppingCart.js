import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {
          !cart.length ? (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          ) : (
            <ol>
              {
                cart.map((item) => (
                  <li
                    key={ item.product.id }
                    data-testid="shopping-cart-product-name"
                  >
                    { item.product.title }
                    <span
                      data-testid="shopping-cart-product-quantity"
                    >
                      { ` x${item.quantity}` }
                    </span>
                  </li>))
              }
            </ol>
          )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
