import React, { Component } from 'react';
import './UserOrderCart.css';
import { connect } from 'react-redux';
import UserCheckoutModal from "../UserCheckoutModal/UserCheckoutModal";

// This component simply renders the users current cart, and displays the checkout button

class UserOrder extends Component {
    render() {
        // Remap users cart of products upon every render of their cart
        var userCart = this.props.userOrderCartReducer.productNameArray.map((value) => {
            return <tr>
                <td key={value}>{value}</td>
            </tr>
        })
        return (
            <div id="user-order-div">
                <h3>Your Cart</h3>
                {/*Table of the users cart info that is updated and rerendered upon change*/}
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
                {/*Button for checkout*/}
                <UserCheckoutModal />
            </div>
        );
    }
}

export default connect((state) => (state))(UserOrder);