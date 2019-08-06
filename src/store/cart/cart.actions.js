import cartActionTypes from './cart.types';

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item
});

export const clearCartItem = item => ({
  type: cartActionTypes.CLEAR_CART_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_CART_ITEM,
  payload: item
});
