import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <Link
        to="*"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    );
  }
}

export default CartButton;
