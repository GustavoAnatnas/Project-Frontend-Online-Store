import React, { Component } from 'react';
import { getProductDetails } from '../services/api';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await getProductDetails(id);
    this.setState({
      details: result,
    });
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <div data-testid="product" key={ details.id }>
          <h3 data-testid="product-detail-name">{details.title}</h3>
          <img src={ details.thumbnail } alt={ details.title } />
          <p>{`R$:${details.price}`}</p>
        </div>
      </div>
    );
  }
}
