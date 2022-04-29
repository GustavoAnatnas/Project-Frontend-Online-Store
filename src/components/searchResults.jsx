import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchResults extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" key={ product.id }>
        <h3>{product.title}</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$:${product.price}`}</p>
        <span>Detalhes</span>
      </div>
    );
  }
}

SearchResults.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
