import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

export default class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      buttonDisabled: false,
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
    const { quantity, buttonDisabled } = this.state;

    return (
      <div>
        <div className="cart">
          <div className="cartItens">
            <div>
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.title } width="150px" />
              <p>{`R$:${(product.price)}`}</p>

            </div>
            {quantity <= 0
              ? buttonDisabled === true
              : (
                <button
                  className="button"
                  type="button"
                  onClick={ this.remove }
                  disabled={ buttonDisabled }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>)}
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            <button
              className="button"
              type="button"
              onClick={ this.add }
              data-testid="product-increase-quantity"
            >
              +
            </button>

          </div>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
