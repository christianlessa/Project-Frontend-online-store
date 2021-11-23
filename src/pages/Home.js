import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartButton from '../Components/CartButton';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.fetchItemList = this.fetchItemList.bind(this);
    this.onRadioClick = this.onRadioClick.bind(this);
    this.fetchProductsFromCategory = this.fetchProductsFromCategory.bind(this);

    this.state = {
      itemList: [],
      searchInput: '',
      category: '',
    };
  }

  onRadioClick({ target }) {
    const { id } = target;

    this.setState({ category: id }, () => this.fetchProductsFromCategory());
  }

  onChangeHandler({ target }) {
    const { value } = target;

    this.setState({ searchInput: value });
  }

  async fetchProductsFromCategory() {
    const { category } = this.state;

    const response = await api.getProductsFromCategory(category);
    this.setState({
      itemList: response.results,
    });
  }

  async fetchItemList() {
    const { searchInput, category } = this.state;

    const response = await api.getProductsFromCategoryAndQuery(category, searchInput);

    this.setState({
      itemList: response.results,
    });
  }

  render() {
    const { itemList, searchInput, category } = this.state;
    const { addToCart, cart } = this.props;
    const searchSomething = !(category || searchInput);
    return (
      <div className="home-container">
        <div className="search-bar-container">
          <Search
            searchInput={ searchInput }
            onChangeHandler={ this.onChangeHandler }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.fetchItemList }
          >
            Pesquisar
          </button>
          <CartButton id="cart-button" cart={ cart } />
        </div>
        <div className="categores-products-container">
          <aside className="categories-container">
            <Categories onRadioClick={ this.onRadioClick } />
          </aside>
          <main className="products-container">
            {
              searchSomething ? (
                <span
                  data-testid="home-initial-message"
                >
                  Digite algum termo de pesquisa ou escolha uma categoria.

                </span>
              ) : null
            }
            {
              itemList.map((item) => (
                <ProductCard
                  key={ item.id }
                  price={ item.price }
                  thumbnail={ item.thumbnail }
                  title={ item.title }
                  id={ item.id }
                  freeShipping={ item.shipping.free_shipping }
                  addToCart={ addToCart }
                  item={ item }
                />
              ))
            }
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
