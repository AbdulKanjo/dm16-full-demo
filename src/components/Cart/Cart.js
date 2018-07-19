import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../Card/ProductCard';

import { getCart, deleteFromCart } from '../../ducks/cartReducer';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    const { cart } = this.props.cart;
    return (
      <div>
        {cart[0] &&
          cart.map((product, i) => (
            <ProductCard
              key={i}
              text="Delete"
              product={product}
              handleCardButtonClick={this.props.deleteFromCart}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getCart, deleteFromCart }
)(Cart);
