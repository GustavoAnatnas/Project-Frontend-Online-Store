import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Loading from '../components/Loading';
import { getProducts } from '../services/api';
import SearchResults from '../components/searchResults';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      products: [],
      loading: false,
    };
  }

  handleInputChange = async ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: [value],
    });
  }

  fetchProducts = async () => {
    const { inputSearch } = this.state;
    this.setState({ loading: true });
    const fetchProducts = await getProducts(inputSearch);
    const resultsProducts = fetchProducts.results.map((product) => (
      <SearchResults key={ product.id } product={ product } />
    ));
    this.setState({
      products: resultsProducts,
      loading: false,
    });
  }

  render() {
    const { inputSearch, products, loading } = this.state;
    return (
      <div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>
        <input
          data-testid="query-input"
          type="text"
          value={ inputSearch }
          name="inputSearch"
          onChange={ this.handleInputChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Pesquisar

        </button>

        <Link data-testid="shopping-cart-button" to="/Cart">
          <button type="button">
            Carrinho
          </button>
        </Link>
        <div>
          <Categories />
        </div>
        <div>
          {loading ? <Loading /> : products }
        </div>

      </div>
    );
  }
}
