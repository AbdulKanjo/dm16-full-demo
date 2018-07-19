import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../ducks/userReducer';

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return <div>{this.props.user.user.name || 'Not Logged In'}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Home);
