import React from 'react';
import { Link } from 'react-router-dom';
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

    this.state = {
      itemList: [],
      searchInput: '',
    };
  }

  onChangeHandler({ target }) {
    const { value } = target;

    this.setState({ searchInput: value });
  }

  async fetchItemList() {
    const { searchInput } = this.state;

    const response = await api.getProductsFromCategoryAndQuery('', searchInput);

    console.log(response.results[0]);
    this.setState({
      itemList: response.results,
    });
  }

  render() {
    const { itemList, searchInput } = this.state;

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
          <CartButton id="cart-button" />
        </div>
        <div className="categores-products-container">
          <aside className="categories-container">
            <Categories />
          </aside>
          <main className="products-container">
            {
              !searchInput ? (
                <span
                  data-testid="home-initial-message"
                >
                  Digite algum termo de pesquisa ou escolha uma categoria.

                </span>
              ) : null
            }
            {
              itemList.map((item) => (
                <Link
                  data-testid="product-detail-link"
                  key={ item.id }
                  to={ `/product/${item.id}` }
                >
                  <ProductCard
                    key={ item.id }
                    price={ item.price }
                    thumbnail={ item.thumbnail }
                    title={ item.title }
                  />
                </Link>
              ))
            }
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
