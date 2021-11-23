import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cart-icon.png';

class CartButton extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <section className="cart-button-container">
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img
            src={ cartIcon }
            alt="cart-icon"
            width="30px"
          />
          <span>{ cart.reduce((acc, curr) => (curr.quantity + acc), 0)}</span>
        </Link>
      </section>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartButton;
