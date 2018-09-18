import React, {Component} from "react";
import store, {loadProducts} from "../store";
import ProductList from './ProductList';
import {Provider} from 'react-redux'



class App extends Component {
  componentDidMount() {
    store.dispatch(loadProducts());
  }
  render() {
    return (
      <Provider store={store}>
      <div>
        <ProductList />
      </div>
      </Provider>
    )
  }
}

export default App;
