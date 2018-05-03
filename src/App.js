import React, { Component } from 'react';
import './App.css';
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProductsList from "./ProductList/ProductList";
import UserOrder from "./UserOrderCart/UserOrderCart";

// Define Redux store
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      // Create Redux store
      <Provider store={store} >
        <div className="App">
          <div id="header-div">
            <img id="pfl-logo" src={require("./project-images/pfl-logo.png")} alt="pfl-logo" />
            <p id="header-date"><b>{new Date().toDateString()}</b></p>
            <h1 id="app-title">Welcome to PFL!</h1>
          </div>
          <p>Click a product to view an example, then check them off to add it your cart!</p>
          {/*Main page consists of 2 components, the list of products and the users cart*/}
          <ProductsList />
          <UserOrder />
        </div>
      </Provider>
    );
  }
}
