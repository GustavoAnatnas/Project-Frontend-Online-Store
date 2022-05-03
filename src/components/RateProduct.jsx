import React, { Component } from 'react';

export default class RateProduct extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  // handleCLick = () => {
  //   localStorage.setItem('saveRate', JSON.stringify(savedRates));
  // };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="product-detail-email"
          placeholder="email"
          onChange={ this.handleChange }
        />
        <input
          value="1"
          name="rate"
          type="radio"
          data-testid="1-rating"
          onChange={ this.handleChange }
        />
        <input
          value="2"
          name="rate"
          type="radio"
          data-testid="2-rating"
          onChange={ this.handleChange }
        />
        <input
          value="3"
          name="rate"
          type="radio"
          data-testid="3-rating"
          onChange={ this.handleChange }
        />
        <input
          value="4"
          name="rate"
          type="radio"
          data-testid="4-rating"
          onChange={ this.handleChange }
        />
        <input
          value="5"
          name="rate"
          type="radio"
          data-testid="5-rating"
          onChange={ this.handleChange }
        />
        <textarea
          data-testid="product-detail-evaluation"
          name="text-area"
          onChange={ this.handleChange }
        />
        <button
          onClick={ this.handleCLick }
          type="button"
          data-testid="submit-review-btn"
        >
          Avaliar

        </button>
      </form>
    );
  }
}
