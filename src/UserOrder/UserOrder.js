import React, { Component } from 'react';
import './UserOrder.css';
import { connect } from 'react-redux';
import UserCheckoutModal from "../UserCheckoutModal/UserCheckoutModal";

class UserOrder extends Component {
    constructor(){
        super();
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity(e){
        console.log(e)
    }

    render() {
        var userCart = this.props.userOrderCartReducer.userCartArray.map((value) => {
            return <tr>
                <td key={value}>{value}</td>
                {/* <td><input type="text" placeholder="enter quantity" /><button type="submit" key={value} onClick={this.updateQuantity}>Enter</button></td>
                <td key={value}></td> */}
            </tr>
        })
        return (
            <div id="user-order-div">
                <h3>Your Cart</h3>
                <table id="user-cart-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            {/* <th>Quantity</th>
                            <th>Quantity Selected</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {userCart}
                    </tbody>
                </table>
                <UserCheckoutModal />
            </div>
        );
    }
}

export default connect((state) => (state))(UserOrder);