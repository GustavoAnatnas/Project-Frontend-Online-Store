import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>
        <input
          type="text"
          name=""
          id=""
        />
        <Link data-testid="shopping-cart-button" to="/Cart">
          <button type="button">
            Pesquisar
          </button>
        </Link>
      </div>
    );
  }
}
