import React, { Component } from 'react';
import { getProductDetails } from '../services/api';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      attributes: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await getProductDetails(id);
    const attribute = result.attributes.map((attr) => (
      <div key={ attr.id }>
        <p>{`${attr.name} : ${attr.value_name}`}</p>
      </div>
    ));
    this.setState({
      details: result,
      attributes: attribute,
    });
  }

  render() {
    const { details, attributes } = this.state;
    return (
      <div>
        <div data-testid="product" key={ details.id }>
          <h3 data-testid="product-detail-name">{details.title}</h3>
          <img src={ details.thumbnail } alt={ details.title } />
          <p>{`R$:${details.price}`}</p>
          <aside>
            {attributes}
          </aside>
        </div>
      </div>
    );
  }
}
