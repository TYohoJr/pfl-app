import React, { Component } from 'react';
import './UserOrder.css';
import axios from "axios";
import { connect } from 'react-redux';

class UserOrder extends Component {
    constructor() {
        super();
        this.createOrder = this.createOrder.bind(this);
    }

    createOrder() {
        axios.post("/createOrder").then((result) => {
            console.log(result.data);
        })
    }

    render() {
        var userCart = this.props.userOrderCartReducer.userCartArray.map((value) => {
            console.log(value)
            return <tr>
                <td key={value}>{value}</td>
            </tr>
        })
        return (
            <div id="user-order-div">
                <h3>Your Cart</h3>
                <table id="user-cart-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCart}
                    </tbody>
                </table>
                <button onClick={this.createOrder}>Create Order</button>
            </div>
        );
    }
}

export default connect((state) => (state))(UserOrder);