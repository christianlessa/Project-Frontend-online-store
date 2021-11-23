import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Routes extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
    this.manipulateCart = this.manipulateCart.bind(this);

    this.state = {
      cart: [],
    };
  }

  manipulateCart(operation, id) {
    const { cart } = this.state;
    switch (operation) {
    case '+':
      cart.find((cartItem) => cartItem.product.id === id).quantity += 1;
      break;
    case '-':
      cart.find((cartItem) => cartItem.product.id === id).quantity -= 1;
      break;
    case 'x':
      this.setState({ cart: cart.filter((cartItem) => cartItem.product.id !== id) });
      break;
    default:
      break;
    }
    this.setState({ cart });
  }

  addToCart(item) {
    const { cart } = this.state;

    this.setState((prev) => {
      const alreadyOnCart = cart
        .some((cartItem) => cartItem.product.id === item.id);

      if (alreadyOnCart) {
        const product = cart.map((cartItem) => {
          if (cartItem.product.id === item.id) {
            const sum = cartItem;
            sum.quantity += 1;
            return sum;
          }
          return cartItem;
        });
        return { cart: [...product] };
      }

      const product = {
        product: item,
        quantity: 1,
      };

      return { cart: [...prev.cart, product] };
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (
            <Home
              cart={ cart }
              addToCart={ this.addToCart }
            />
          ) }
        />
        <Route
          exact
          path="/cart"
          render={ () => (
            <ShoppingCart
              cart={ cart }
              manipulateCart={ this.manipulateCart }
            />
          ) }
        />
        <Route
          exact
          path="/product/:id"
          render={ (props) => (
            <ProductDetails
              addToCart={ this.addToCart }
              cart={ cart }
              { ...props }
            />
          ) }
        />
      </Switch>
    );
  }
}

export default Routes;
