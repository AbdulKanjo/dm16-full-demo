import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import cartReducer from './ducks/cartReducer';
import userReducer from './ducks/userReducer';
import productReducer from './ducks/productReducer';

const combinedReducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  product: productReducer
});

const middlewares = applyMiddleware(promiseMiddleware());

const store = createStore(combinedReducers, middlewares);

export default store;
