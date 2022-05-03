import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import './ProductCard.css';
import RateProduct from '../components/RateProduct';

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
          <Link
            className="forms"
            data-testid="shopping-cart-button"
            to="/Cart"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="carrinho" width="30px" />
          </Link>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => onClick(details) }
          >
            Adicionar ao Carrinho
          </button>
          <RateProduct />
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
