import React, { Component } from 'react';
import CartItems from '../components/Cart';

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
    return (
      <CartItems
        productCart={ productCart }
        productCartDetails={ productCartDetails }
      />
    );
  }
}
