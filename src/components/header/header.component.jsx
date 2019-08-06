import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../store/cart/cart.selectors';
import './header.styles.scss';

const Header = ({ cartItemCount }) => (
  <div className="header">
    <Link to="/">Books</Link>
    <Link to="/checkout">
      Cart <span className="cart_item_count">{cartItemCount}</span>
    </Link>
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItemCount: selectCartItemCount
  });

export default connect(mapStateToProps)(Header);
