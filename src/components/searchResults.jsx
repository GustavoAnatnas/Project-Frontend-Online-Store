import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchResults.css';

export default class SearchResults extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className="list-product" data-testid="product" key={ product.id }>
        <h3>{product.title}</h3>
        <img src={ product.thumbnail } alt={ product.title } width='150px'/>
        <p>{`R$:${product.price}`}</p>
        <Link
          to={ `/productCard/${product.id}` }
          data-testid="product-detail-link"
        >
          <span>Detalhes</span>

        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => onClick(product) }
        >
          Adicionar ao Carrinho

        </button>
      </div>
    );
  }
}

SearchResults.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};
