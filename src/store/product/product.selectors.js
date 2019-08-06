import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectProductsList = createSelector(
  [selectProducts],
  products => products.products
);
