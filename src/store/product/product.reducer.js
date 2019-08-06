import { products } from './products';
import productActionTypes from './product.types';

const initialState = {
  products: products
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS:
      return {
        ...state.products
      };
    default:
      return state;
  }
};

export default productReducer;
