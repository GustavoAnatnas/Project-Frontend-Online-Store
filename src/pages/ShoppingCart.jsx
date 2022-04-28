import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productCart: JSON.parse(localStorage.getItem('cart')) || [],
      productCartDetails: JSON.parse(localStorage.getItem('cartDetails')) || [],
    };
  }

  render() {
    const { productCart, productCartDetails } = this.state;
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
