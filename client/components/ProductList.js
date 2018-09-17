import React from 'react';
import {connect} from 'react-redux'

const ProductList = ({productList}) => {
  return <div>
  {productList.length}
  </div>
};

const mapStateToProps = ({productList}) => {
  return {
    productList
  }
}

export default connect(mapStateToProps)(ProductList);
