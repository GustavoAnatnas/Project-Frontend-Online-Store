import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/Cart';

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
        <header className="headerCart">Carrinho de Compras</header>
        {condicional
            && <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>}
        {productCart.map((detail) => (
          <CartItems
            key={ detail.id }
            product={ detail }
          />
        )) }
        <Link to="./checkout">
          <button data-testid="checkout-products" type="button">
            Checkout
          </button>
        </Link>
      </div>
    );
  }
}
