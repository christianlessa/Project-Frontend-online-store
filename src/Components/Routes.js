import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import * as api from '../services/api';
import ProductDetails from '../pages/ProductDetails';

class Routes extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cart: [],
    };
  }

  async addToCart(id) {
    const { cart } = this.state;
    const response = await api.getProductfromId(id);
    const alreadyOnCart = cart.some((cartItem) => cartItem.product.id === response.id);

    if (alreadyOnCart) {
      cart.find((cartItem) => cartItem.product.id === response.id).quantity += 1;
    } else {
      const product = {
        product: response,
        quantity: 1,
      };

      this.setState((prev) => ({
        cart: [...prev.cart, product],
      }));
    }
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
              addToCart={ this.addToCart }
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
