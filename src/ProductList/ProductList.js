import React, { Component } from 'react';
import './ProductList.css';
import axios from "axios";
import { connect } from 'react-redux';
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal";

// Arrays to store both the names and valuable info about the products the user has added to their cart
// The productNamesArray is mapped in the render method of UserOrderCart.js
var productNameArray = [];
var productInfoArray = [];

class ProductList extends Component {
    constructor() {
        super();
        this.addProductToOrder = this.addProductToOrder.bind(this);
        this.state = {
            // Set the initial state to a string to inform the user that the product list is loading from the API
            productsList: 'loading product list..'
        }
    }

    // Function to conditionally add the selected product to the users cart
    addProductToOrder(e) {
        // Add incrementing variable to give each product a unique id
        let sequenceCounter = productInfoArray.length + 1
        let productIdNumber = Number(e.target.value);
        // Create an object of the product and all it's info
        // , "productName": e.target.parentNode.innerText
        let newProductObject = { "ItemSequenceNumber": sequenceCounter, "ProductID": productIdNumber, "Quantity": 1000, "ItemFile": "http://www.mydomain.com/itemFiles/myItemFile.pdf", "TemplateData":null, "ItemID":0 }
        // If the product doesn't exist in the array then push it onto it, otherwise splice it out
        if (productNameArray.indexOf(e.target.parentNode.innerText) === -1) {
            productNameArray.push(e.target.parentNode.innerText);
            productInfoArray.push(newProductObject);
        } else {
            productNameArray.splice(productNameArray.indexOf(e.target.parentNode.innerText), 1)
            productInfoArray.splice(newProductObject, 1)
        }
        // Send both arrays to reducers.js so they can be accessed in UserCheckoutModal.js upon checkout
        this.props.dispatch({
            type: "addItemToCart",
            productNameArray: productNameArray,
            productInfoArray: productInfoArray
        })
    }

    render() {
        // If the product hasn't been obtained yet, call the API to obtain it
        if (this.state.productsList === 'loading product list..') {
            axios.post("/getProducts").then((result) => {
                this.setState({
                    // Map the product list into the displayed table, along with a checkbox so the user can select them
                    productsList: result.data.body.results.data.map((value) => {
                        console.log(value)
                        return <tr>
                            <td className={value.id} key={value.id}><input className="product-list-checkbox" type="checkbox" value={value.productID} onChange={this.addProductToOrder} /><ProductInfoModal imageURL={value.imageURL} productName={value.name} lastUpdated={value.lastUpdated}/></td>
                        </tr>
                    })
                })
            })
        }
        return (
            <div id="product-list-div">
                <h3>Product List</h3>
                {/*Table of available products from the API*/}
                <div id="product-list-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Available Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productsList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect((state) => (state))(ProductList);