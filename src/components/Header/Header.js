import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Header = props => {
  return (
    <div>
      <Link replace to="/">
        Home
      </Link>
      <Link replace to="/shop">
        Shop
      </Link>
      <Link replace to="/login">
        Login
      </Link>
      <Link replace to="/cart">
        Cart
      </Link>
      <Link replace to="/cart">
        <div>{props.cart.cart.length || 0}</div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);
