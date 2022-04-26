import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const fetchCategories = await getCategories();
    const categoriesNames = fetchCategories.map((element) => (
      <li data-testid="category" key={ element.id }>{ element.name }</li>));
    this.setState({
      categories: categoriesNames,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}
