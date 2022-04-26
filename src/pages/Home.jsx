import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProducts } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      products: [],
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
    const fetchProducts = await getProducts(inputSearch);
    // console.log(fetchProducts);
    const resultsProducts = fetchProducts.results.map((product) => (
      <div data-testid="product" key={ product.id }>
        <h3>{product.title}</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$:${product.price}`}</p>
      </div>
    ));
    this.setState({ products: resultsProducts });
  }

  render() {
    const { inputSearch, products } = this.state;
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
          { products }
        </div>

      </div>
    );
  }
}
