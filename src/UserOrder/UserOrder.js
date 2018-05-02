import React, { Component } from 'react';
import './UserOrder.css';
import axios from "axios";
import { connect } from 'react-redux';

class UserOrder extends Component {
    constructor() {
        super();
        this.createOrder = this.createOrder.bind(this);
        this.state = {
            productsList: ''
        }
    }

    createOrder() {
        axios.post("/createOrder").then((result) => {
            console.log(result.data);
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.createOrder}>Create Order</button>
            </div>
        );
    }
}

export default connect((state) => (state))(UserOrder);