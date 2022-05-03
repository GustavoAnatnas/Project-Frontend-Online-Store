import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import './ProductCard.css';

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
    const { onClick } = this.props;
    return (
      <div className="product-card">
        <div data-testid="product" key={ details.id }>
          <h3 data-testid="product-detail-name">{details.title}</h3>
          <img src={ details.thumbnail } alt={ details.title } />
          <p>{`R$: ${details.price}`}</p>
          <aside>
            {attributes}
          </aside>
          <p data-testid="shopping-cart-product-quantity">1</p>
          <Link data-testid="shopping-cart-button" to="/Cart">
            <button type="button">
              Carrinho
            </button>
          </Link>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => onClick(details) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
