import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  add = () => {
    this.setState((prev) => ({
      quantity: prev.quantity + 1,
    }));
  }

  remove = () => {
    this.setState((prev) => ({
      quantity: prev.quantity - 1,
    }));
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <div>
          <div>
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{`R$:${product.price}`}</p>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          </div>
          <button
            type="button"
            onClick={ this.add }
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            type="button"
            onClick={ this.remove }
            data-testid="product-decrease-quantity"
          >
            -

          </button>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
