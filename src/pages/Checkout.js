import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      address: '',
      cep: '',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { cart } = this.props;
    const {
      name,
      email,
      cpf,
      phone,
      address,
      cep,
    } = this.state;
    return (
      <div>

        <h1>Checkout</h1>

        <div>
          Revise Seus Produtos:

          <ul>
            {
              cart.map((cartItem) => (
                <li key={ cartItem.product.id }>
                  { cartItem.product.title }
                  <span>
                    { ` | [${cartItem.quantity}x] ` }
                  </span>
                  <span>
                    { ` | R$ ${cartItem.product.price} ` }
                  </span>
                </li>
              ))
            }
          </ul>

          <div>
            Total: R$
            <span>
              {
                cart
                  .reduce((acc, curr) => (
                    (curr.product.price * curr.quantity) + acc
                  ), 0).toFixed(2)
              }
            </span>
          </div>

        </div>

        <hr />

        <div>
          <input
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            data-testid="checkout-email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="checkout-cpf"
            placeholder="CPF"
            name="cpf"
            value={ cpf }
            onChange={ this.handleChange }
          />
          <input
            data-testid="checkout-phone"
            placeholder="Telefone"
            name="phone"
            value={ phone }
            onChange={ this.handleChange }
          />
          <input
            data-testid="checkout-cep"
            placeholder="CEP"
            name="cep"
            value={ cep }
            onChange={ this.handleChange }
          />
          <input
            data-testid="checkout-address"
            placeholder="Endereço Completo"
            name="address"
            value={ address }
            onChange={ this.handleChange }
          />
        </div>

        <button
          type="button"
        >
          Finalizar Compra
        </button>

      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Checkout;
