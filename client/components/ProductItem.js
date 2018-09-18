import React from 'react';
import {deleteProduct} from '../store';
import {connect} from 'react-redux'

const ProductItem = ({productItem, deleteProduct}) => {

  return (
    <li>
    {productItem.productName}
    {` (${productItem.rating})`}
    <button onClick={() => deleteProduct(productItem)}> x </button>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (productItem) => dispatch(deleteProduct(productItem))
  }
}

export default  connect(null, mapDispatchToProps)(ProductItem)
