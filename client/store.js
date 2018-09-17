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
    .then(products => dispatch(_loadProducts(products)));
  }
}

const ProductReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
    state = action.products;
    return state
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
