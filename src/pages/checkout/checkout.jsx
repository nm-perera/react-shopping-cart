import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotalAmount
} from '../../store/cart/cart.selectors';
import './checkout.styles.scss';
import {
  clearCartItem,
  addItemToCart,
  removeItemFromCart
} from '../../store/cart/cart.actions';

const Checkout = ({
  cartItems,
  clearCartItem,
  totalAmount,
  removeItemFromCart,
  addItemToCart
}) => (
  <div className="container">
    <div className="checkout">
      <h3>Checkout</h3>
      <div className="checkout__items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <div className="checkout__item" key={cartItem.id}>
              <img alt={cartItem.title} src={cartItem.imageUrl} />
              <div className="checkout__item__title">
                <h4>{cartItem.title}</h4>
                <p className="checkout__item__quantity">
                  <span
                    className="checkout__item__quantity__left"
                    onClick={() => removeItemFromCart(cartItem)}
                  >
                    &#10094;
                  </span>
                  {cartItem.quantity}
                  <span
                    className="checkout__item__quantity__right"
                    onClick={() => addItemToCart(cartItem)}
                  >
                    &#10095;
                  </span>
                </p>
              </div>
              <p className="checkout__item__price">${cartItem.price}</p>
              <span
                className="checkout__item__close"
                onClick={() => clearCartItem(cartItem)}
              >
                &#10006;
              </span>
            </div>
          ))
        ) : (
          <p>Your Cart is Empty!!</p>
        )}
      </div>
      <h2>Total ${totalAmount.toFixed(2)}</h2>
    </div>
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    totalAmount: selectCartTotalAmount
  });

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
