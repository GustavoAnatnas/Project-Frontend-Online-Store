import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selected: '',
      products: [],
      loading: false,
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

onChecked = async ({ target }) => {
  const { value } = target;

  this.setState({ selected: value }, async () => {
    await this.fetchProductsByCategories();
    // resolução de erro
  });
}

fetchProductsByCategories = async () => {
  const { selected } = this.state;
  this.setState({
    loading: true,
  });
  const fetchProducts = await getProductsFromCategoryAndQuery(selected);
  const resultsProducts = await fetchProducts.results.map((product) => (
    <div data-testid="product" key={ product.id }>
      <h3>{product.title}</h3>
      <img src={ product.thumbnail } alt={ product.title } />
      <p>{`R$:${product.price}`}</p>
    </div>
  ));
  this.setState({
    loading: false,
    products: resultsProducts,
  });
}

render() {
  const { categories, products, loading } = this.state;
  return (
    <div>
      {categories}

      {loading ? <Loading /> : products}
    </div>
  );
}
}
