import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_PRODUCTS = "LOAD_PRODUCTS"

const _loadProducts = (productList) => {
  return{
    productList,
    type: LOAD_PRODUCTS
  }
}

const loadProducts = () => {
  return(dispatch) => {
    axios.get('/api/products')
    .then(response => response.data)
    .then(product => dispatch(_loadProducts(product)));
  }
}

const ProductReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
    state = action.productList
    break;
  }
  return state;
};

const reducer = combineReducers({
  productList: ProductReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export {loadProducts};
