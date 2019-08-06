import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer.js';
import productReducer from './product/product.reducer';

export default combineReducers({
  cart: cartReducer,
  products: productReducer
});
