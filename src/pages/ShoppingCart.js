import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cart, manipulateCart } = this.props;
    return (
      <div>
        {
          !cart.length ? (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          ) : (
            <div>
              {
                cart.map((item) => (
                  <div
                    key={ item.product.id }
                  >
                    <span data-testid="shopping-cart-product-name">
                      { item.product.title }
                    </span>

                    <span
                      data-testid="shopping-cart-product-quantity"
                    >
                      { ` x${item.quantity}` }
                    </span>

                    <button
                      data-testid="product-increase-quantity"
                      disabled={ item.quantity === item.product.available_quantity }
                      type="button"
                      onClick={ () => manipulateCart('+', item.product.id) }
                    >
                      +
                    </button>

                    <button
                      data-testid="product-decrease-quantity"
                      type="button"
                      onClick={ () => manipulateCart('-', item.product.id) }
                    >
                      -
                    </button>

                  </div>))
              }
              <Link
                data-testid="checkout-products"
                to="/checkout"
              >
                Checkout
              </Link>
            </div>
          )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  manipulateCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
