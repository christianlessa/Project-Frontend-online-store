import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartButton from '../Components/CartButton';
import ProductEvaluation from '../Components/ProductEvaluation';

class ProductDetails extends Component {
  constructor() {
    super();

    this.fetchProduct = this.fetchProduct.bind(this);

    this.state = {
      name: '',
      thumbnail: '',
      price: undefined,
      specifications: [],
      item: {},
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match } = this.props;
    const { id } = match.params;

    const response = await api.getProductfromId(id);

    this.setState({
      name: response.title,
      thumbnail: response.thumbnail,
      price: response.price.toFixed(2),
      specifications: response.attributes,
      item: response,
      freeShipping: response.shipping.free_shipping,
    });
  }

  render() {
    const {
      name,
      thumbnail,
      price,
      specifications,
      freeShipping,
    } = this.state;
    const { addToCart, cart } = this.props;
    const { item } = this.state;

    return (
      <div>
        <CartButton cart={ cart } />
        <div>
          <h1 data-testid="product-detail-name">{ name }</h1>
          <span>{ `- R$ ${price}` }</span>
        </div>
        <div>
          <span>
            {
              freeShipping ? <span data-testid="free-shipping">Frete Grátis</span> : null
            }
          </span>
        </div>
        <div>
          <img src={ thumbnail } alt={ name } />
          <div>
            <ul>
              {
                specifications.map((specification) => (
                  <li key={ specification.name }>
                    { `${specification.name}: ${specification.value_name}` }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={ () => addToCart(item) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <div>
          <ProductEvaluation />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetails;
