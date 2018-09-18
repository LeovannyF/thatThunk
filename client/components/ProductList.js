import React from 'react';
import {connect} from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
  <ul>
  {
    productList.map(product => <ProductItem key={product.id} productItem ={product}/>)
  }
  </ul>
 );
};

const mapStateToProps = ({productList}) => {
  return {
    productList
  }
}

export default connect(mapStateToProps)(ProductList);
