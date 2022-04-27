import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selected: '',
      products: [],
    };
  }

  async componentDidMount() {
    const fetchCategories = await getCategories();
    const categoriesNames = fetchCategories.map((element) => (
      <div key={ element.id }>
        <label htmlFor={ element.id }>
          <input
            value={ element.id }
            id={ element.id }
            type="radio"
            name="category"
            data-testid="category"
            onClick={ this.onChecked }
          />
          { element.name }
        </label>
      </div>));
    this.setState({
      categories: categoriesNames,
    });
  }

onChecked = ({ target }) => {
  const { value } = target;

  this.setState({
    selected: value,
  });
  this.fetchProductsByCategories();
}

fetchProductsByCategories = async () => {
  const { selected } = this.state;
  const fetchProducts = await getProductsFromCategoryAndQuery(selected);
  // console.log(fetchProducts);
  const resultsProducts = fetchProducts.results.map((product) => (
    <div data-testid="product" key={ product.id }>
      <h3>{product.title}</h3>
      <img src={ product.thumbnail } alt={ product.title } />
      <p>{`R$:${product.price}`}</p>
    </div>
  ));
  this.setState({
    products: resultsProducts,
  });
}

render() {
  const { categories, products } = this.state;
  return (
    <div>
      {categories}
      {products}
    </div>
  );
}
}
