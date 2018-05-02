import React, { Component } from 'react';
import './ProductList.css';
import axios from "axios";
import { connect } from 'react-redux';

var userCartArray = []

class ProductList extends Component {
    constructor() {
        super();
        this.addProductToOrder = this.addProductToOrder.bind(this);
        this.state = {
            productsList: 'loading product list..',
            userCartArray: []
        }
    }

    addProductToOrder(e) {
        // console.log(e.target.parentNode.innerText);
        // console.log(e.target.offsetParent.className);
        if (userCartArray.indexOf(e.target.parentNode.innerText) === -1){
            // userCartArray.push({productId:e.target.parentNode.innerText, quantity:50})
        } else {
            userCartArray.splice(userCartArray.indexOf(e.target.parentNode.innerText), 1)
        }
        this.props.dispatch({
            type: "addItemToCart",
            userCartArray: userCartArray
        })
    }

    render() {
        if (this.state.productsList === 'loading product list..') {
            axios.post("/getProducts").then((result) => {
                this.setState({
                    productsList: result.data.body.results.data.map((value) => {
                        return <tr>
                            <td className={value.id} key={value.id}><input type="checkbox" onChange={this.addProductToOrder} />{value.id}:{value.name}</td>
                        </tr>
                    })
                })
            })
        }
        return (
            <div id="product-list-div">
                <table id="product-list-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.productsList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect((state) => (state))(ProductList);