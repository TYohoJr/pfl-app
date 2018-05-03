import React, { Component } from 'react';
import './App.css';
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProductsList from "./ProductList/ProductList";
import UserOrder from "./UserOrderCart/UserOrderCart";

// Create Redux store
const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      // Define Redux store
      <Provider store={store} >
        <div className="App">
          {/*Main page consists of 2 components, the list of products and the users cart*/}
          <ProductsList />
          <UserOrder />
        </div>
      </Provider>
    );
  }
}
