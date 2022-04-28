import React, { Component } from 'react';
import CartItems from '../components/Cart';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productCart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  render() {
    const { productCart, detailCart } = this.state;
    const condicional = productCart.length === 0 && detailCart.length === 0;
    return (
      <div>
        {condicional
            && <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>}
        {productCart.map((detail) => (
          <CartItems
            key={ detail.id }
            product={ detail }
          />
        )) }
      </div>
    );
  }
}
