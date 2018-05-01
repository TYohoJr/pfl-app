import React, { Component } from 'react';
import './ProductList.css';
import axios from "axios";
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor() {
        super();
        this.getProducts = this.getProducts.bind(this);
        this.addProductToOrder = this.addProductToOrder.bind(this);
        this.state = {
            productsList: ''
        }
    }

    addProductToOrder(e) {
        console.log(e.target.parentNode.innerText);
        console.log(e.target.offsetParent.className);
    }

    getProducts() {
        axios.post("/getProducts").then((result) => {
            console.log(result.data);
            this.setState({
                productsList: result.data.body.results.data.map((value) => {
                    console.log(value.id)
                    return <tr>
                        <td className={value.id} key={value.id}><input type="checkbox" onChange={this.addProductToOrder} />{value.name}</td>
                    </tr>
                })
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getProducts}>Get Products</button>
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