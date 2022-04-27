import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    const saved = localStorage.getItem('cart');
    console.log(JSON.parse(saved));
    this.state = {
      productCart: [...saved],
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
