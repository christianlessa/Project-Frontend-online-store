import React from 'react';
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

    this.setState({ category: id });

    this.fetchProductsFromCategory();
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
    const { itemList, searchInput } = this.state;

    return (
      <div>
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
        <CartButton />
        <Categories onRadioClick={ this.onRadioClick } />
        <div>
          {
            itemList.map((item) => (
              <ProductCard
                key={ item.id }
                price={ item.price }
                thumbnail={ item.thumbnail }
                title={ item.title }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;
