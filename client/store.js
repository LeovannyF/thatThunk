import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const DELETE_PRODUCT_ITEM = "DELETE_PRODUCT_ITEM";
const CREATE_PRODUCT_ITEM = "CREATE_PRODUCT_ITEM";

const _loadProducts = (productList) => {
  return{
    productList,
    type: LOAD_PRODUCTS
  }
}

const _deleteProduct = (productItem) => {
  return {
    productItem,
    type: DELETE_PRODUCT_ITEM
  }
}

const _createProduct = (productItem) => {
  return {
    productItem,
    type: CREATE_PRODUCT_ITEM
  }
}

const loadProducts = () => {
  return(dispatch) => {
    axios.get('/api/products')
    .then(response => response.data)
    .then(product => dispatch(_loadProducts(product)));
  }
}

const deleteProduct = (productItem) => {
  return(dispatch) => {
    axios.delete(`/api/products/${productItem.id}`)
    .then( () => dispatch( _deleteProduct(productItem)));
  }
}

const createProduct = (productItem) => {
  return(dispatch) => {
    return axios.post('/api/products', productItem)
    .then( response => response.data)
    .then(product => dispatch( _createProduct(product)))
  }
}

const ProductReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
    state = action.productList
    break;

    case DELETE_PRODUCT_ITEM:
    state = state.filter(productItem => productItem.id !== action.productItem.id)
    break;

    case CREATE_PRODUCT_ITEM:
    state = [...state, action.productItem]
    break;
  }
  return state;
};

const reducer = combineReducers({
  productList: ProductReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export {loadProducts, deleteProduct, createProduct};
