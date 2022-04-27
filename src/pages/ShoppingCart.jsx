import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productCart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  render() {
    const { productCart } = this.state;
    const condicional = productCart.length === 0;
    return (

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
    );
  }
}
