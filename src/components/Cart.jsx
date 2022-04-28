import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  render() {
    const { productCart, productCartDetails } = this.props;
    const condicional = productCart.length === 0 && productCartDetails.length === 0;
    return (
      <div>
        <div>
          {condicional
            && <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>}
          {productCart.map((details) => (
            <div key={ details.id }>
              <div>
                <h3 data-testid="shopping-cart-product-name">{details.title}</h3>
                <img src={ details.thumbnail } alt={ details.title } />
                <p>{`R$:${details.price}`}</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
              </div>
            </div>
          )) }
        </div>
        <div>
          {productCartDetails.map((detail) => (
            <div key={ detail.id }>
              <div>
                <h3 data-testid="shopping-cart-product-name">{detail.title}</h3>
                <img src={ detail.thumbnail } alt={ detail.title } />
                <p>{`R$:${detail.price}`}</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  productCart: PropTypes.arrayOf(PropTypes.any).isRequired,
  productCartDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
};
