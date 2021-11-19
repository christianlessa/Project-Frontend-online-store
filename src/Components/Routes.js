import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Routes extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cart: [],
    };
  }

  addToCart(id) {
    this.setState((prev) => ({
      cart: [...prev.cart, id],
    }));
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
