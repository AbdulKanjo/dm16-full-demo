import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../Card/ProductCard';

import { getProducts } from '../../ducks/productReducer';
import { addToCart } from '../../ducks/cartReducer';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props.product;
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '90%',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}
      >
        {isLoading && <p>Loading...</p>}
        {products[0] &&
          products.map((product, i) => (
            <ProductCard
              product={product}
              key={i}
              text="Add To Cart"
              handleCardButtonClick={this.props.addToCart}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getProducts, addToCart }
)(Products);
