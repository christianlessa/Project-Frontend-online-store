import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <ul>
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
      </ul>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
