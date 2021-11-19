import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.fetchProduct = this.fetchProduct.bind(this);

    this.state = {
      name: '',
      thumbnail: '',
      price: undefined,
      specifications: [],
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
    });
  }

  render() {
    const {
      name,
      thumbnail,
      price,
      specifications,
    } = this.state;

    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{ name }</h1>
          <span>{ `- R$ ${price}` }</span>
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
};

export default ProductDetails;
