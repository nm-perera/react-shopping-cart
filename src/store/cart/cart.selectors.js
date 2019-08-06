import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0)
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accu, cartItem) => accu + cartItem.quantity * cartItem.price,
      0
    )
);
