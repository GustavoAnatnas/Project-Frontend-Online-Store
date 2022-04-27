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
    return (
      <div>
        {productCart}
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}
