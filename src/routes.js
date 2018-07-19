import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

export default (
  <Switch>
    <Route path="/cart" component={Cart} />
    <Route path="/login" component={Login} />
    <Route path="/shop" component={Products} />
    <Route exact path="/" component={Home} />
    <Route path="*" render={() => <div>FourOhFour</div>} />
  </Switch>
);
