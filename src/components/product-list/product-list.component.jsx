import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductItem from '../product-item/product-item.component';
import { selectProductsList } from '../../store/product/product.selectors';
import './product-list.styles.scss';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No Products Found.</p>
      )}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    products: selectProductsList
  });

export default connect(mapStateToProps)(ProductList);
