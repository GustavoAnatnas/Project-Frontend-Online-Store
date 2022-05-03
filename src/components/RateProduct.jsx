import React, { Component } from 'react';

export default class RateProduct extends Component {
  render() {
    return (
      <form>
        <input
          type="email"
          id="email"
          data-testid="product-detail-email"
          placeholder="email"
        />
        <textarea data-testid="product-detail-evaluation" />
        <button type="button" data-testid="submit-review-btn">Avaliar</button>
      </form>
    );
  }
}
