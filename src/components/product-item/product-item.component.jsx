import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import './product-item.styles.scss';

const ProductItem = ({ product, addItemToCart }) => (
  <div className="product-item">
    <img
      className="product-item__img"
      src={product.imageUrl}
      alt={product.title}
    />
    <h4 className="product-item__title">{product.title}</h4>
    <h3>{product.price}</h3>
    <button
      className="product-item__button"
      onClick={() => addItemToCart(product)}
    >
      Add To Cart
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
