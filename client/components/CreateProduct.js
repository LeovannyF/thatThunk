import React from 'react';
import {connect} from 'react-redux';
import { createProduct} from '../store';
import faker from 'faker';



const CreateProduct  = ({createProduct}) => {
  return (
    <div>
      <button onClick={() => createProduct({productName: faker.commerce.product()})} > Add Product </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  createProduct: (productItem) => dispatch(createProduct(productItem))

  })

export default connect(null, mapDispatchToProps)(CreateProduct);
