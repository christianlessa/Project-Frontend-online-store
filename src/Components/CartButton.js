import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cart-icon.png';

class CartButton extends React.Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <img
          src={ cartIcon }
          alt="cart-icon"
          width="20px"
        />
      </Link>
    );
  }
}

export default CartButton;
