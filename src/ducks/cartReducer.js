import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: axios.post('/api/cart', product)
  };
}

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get('/api/cart')
  };
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: axios.delete(`/api/cart/${product.id}`)
  };
}

const initialState = {
  cart: [],
  didErr: false
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_TO_CART}_FULFILLED`:
    case `${GET_CART}_FULFILLED`:
    case `${DELETE_FROM_CART}_FULFILLED`:
      return {
        ...state,
        cart: action.payload.data
      };
    case `${ADD_TO_CART}_REJECTED`:
    case `${GET_CART}_REJECTED`:
    case `${DELETE_FROM_CART}_REJECTED`:
      return {
        ...state,
        didErr: true
      };
    default:
      return state;
  }
}
