import React, { Component } from 'react';
import * as api from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <section>
        {categories.map((category) => (
          <div key={ category.id }>
            <input type="radio" data-testid="category" id={ category.id } />
            <label htmlFor={ category.id }>{category.name}</label>
          </div>
        ))}
      </section>
    );
  }
}
