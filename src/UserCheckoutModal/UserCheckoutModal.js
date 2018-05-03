import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import "./UserCheckoutModal.css";
import axios from "axios";
import { connect } from 'react-redux';

class UserCheckoutModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
        this.onAddressOneChange = this.onAddressOneChange.bind(this);
        this.onAddressTwoChange = this.onAddressTwoChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onPostalCodeChange = this.onPostalCodeChange.bind(this);
        this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onOrderReferenceChange = this.onOrderReferenceChange.bind(this);
        // State of the checkout modal being open or close
        this.state = {
            modal: false
        };
    }
    // Toggle the modal open/close, but only is the user has something in their cart
    toggle() {
        if (!this.props.userOrderCartReducer.productNameArray.length) {
            alert("Your cart is empty!");
            return;
        }
        this.setState({
            modal: !this.state.modal
        });
    }
    // Conditionally send the order to the server
    createOrder() {
        // Simplify data structure
        let user = this.props.userDetailsReducer
        // Check if all required fields are filled out, break out of function if one is not
        switch (true) {
            case !user.firstName:
                return alert("First Name can't be blank");
            case !user.lastName:
                return alert("Last Name can't be blank");
            case !user.companyName:
                return alert("Company Name can't be blank");
            case !user.addressOne:
                return alert("Address can't be blank");
            case !user.city:
                return alert("City can't be blank");
            case !user.userState:
                return alert("State can't be blank");
            case !user.postalCode:
                return alert("Postal Code can't be blank");
            case !user.countryCode:
                return alert("Country Code can't be blank");
            case !user.email:
                return alert("Email can't be blank");
            case !user.phone:
                return alert("Phone Number can't be blank");
            default:
                break;
        }
        // Send all the order and customer information to the server
        axios.post("/createOrder", { userDetails: this.props.userDetailsReducer, orderProductInfo: this.props.userOrderCartReducer.productInfoArray }).then((result) => {
            console.log(result.data);
            // If an order number is received send it to the customer in an alert
            if (result.data.body.results.data.orderNumber) {
                alert(`Your order was successfully submitted!\nYour order number is: ${result.data.body.results.data.orderNumber}`);
                // Clear their cart to prevent duplicate orders
                this.props.dispatch({
                    type: "clearOrderCart"
                })
                // Close modal
                this.setState({
                    modal: false
                })
                // Error handling if an order number isn't recieved
            } else {
                // Map the array of errors
                let errorsArray = result.data.body.results.errors.map((value, index) => {
                    // Inside of the first map, map the array of error details that exists inside of each individual error
                    return value.dataElementErrors.map((value2) => {
                        return `Error ${index}\nType: ${value.dataElement}\nDetails: ${value2}\n\n`
                    })
                })
                // Splice out the commas that are generated from the map functions
                let alertMessage = `Failed to submit order\nStatus Code: ${result.data.body.meta.statusCode}\n\n${errorsArray}`;
                alertMessage = alertMessage.split('')
                for (var i = 0; i < alertMessage.length; i++) {
                    if (alertMessage[i] === "," && (alertMessage[i + 1] === "T" || alertMessage[i + 1] === "E")) {
                        alertMessage.splice(i, 1)
                    }
                }
                alertMessage = alertMessage.join('')
                // Send the compiled error message back to the user
                alert(alertMessage);

            }
        })
    }
    // Send the form info to reducers.js(redux) on every change of an input
    onFirstNameChange(e) {
        this.props.dispatch({
            type: "onFirstNameChange",
            firstName: e.target.value
        })
    }

    onLastNameChange(e) {
        this.props.dispatch({
            type: "onLastNameChange",
            lastName: e.target.value
        })
    }

    onCompanyNameChange(e) {
        this.props.dispatch({
            type: "onCompanyNameChange",
            companyName: e.target.value
        })
    }

    onAddressOneChange(e) {
        this.props.dispatch({
            type: "onAddressOneChange",
            addressOne: e.target.value
        })
    }

    onAddressTwoChange(e) {
        this.props.dispatch({
            type: "onAddressTwoChange",
            addressTwo: e.target.value
        })
    }

    onCityChange(e) {
        this.props.dispatch({
            type: "onCityChange",
            city: e.target.value
        })
    }

    onStateChange(e) {
        this.props.dispatch({
            type: "onStateChange",
            userState: e.target.value
        })
    }

    onPostalCodeChange(e) {
        this.props.dispatch({
            type: "onPostalCodeChange",
            postalCode: e.target.value
        })
    }

    onCountryCodeChange(e) {
        this.props.dispatch({
            type: "onCountryCodeChange",
            countryCode: e.target.value
        })
    }

    onEmailChange(e) {
        this.props.dispatch({
            type: "onEmailChange",
            email: e.target.value
        })
    }

    onPhoneChange(e) {
        this.props.dispatch({
            type: "onPhoneChange",
            phone: e.target.value
        })
    }

    onOrderReferenceChange(e) {
        this.props.dispatch({
            type: "onOrderReferenceChange",
            orderReference: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Checkout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Customer Info</ModalHeader>
                    <ModalBody>
                        {/*Have the user input all required information about the order*/}
                        <Label>Name</Label>
                        <Input type="text" placeholder="First Name" maxLength="128" onChange={this.onFirstNameChange} />
                        <Input type="text" placeholder="Last Name" maxLength="128" onChange={this.onLastNameChange} />
                        <Label>Company Name</Label>
                        <Input type="text" placeholder="Company Name" maxLength="50" onChange={this.onCompanyNameChange} />
                        <Label>Address</Label>
                        <Input type="text" placeholder="Address Line 1" maxLength="70" onChange={this.onAddressOneChange} />
                        <Input type="text" placeholder="Address Line 2" maxLength="128" onChange={this.onAddressTwoChange} />
                        <Input type="text" placeholder="City" maxLength="36" onChange={this.onCityChange} />
                        <Input type="text" placeholder="State" maxLength="255" onChange={this.onStateChange} />
                        <Input type="text" placeholder="Postal Code" maxLength="10" onChange={this.onPostalCodeChange} />
                        <Input type="text" placeholder="Country Code" maxLength="70" onChange={this.onCountryCodeChange} />
                        <Label>Email</Label>
                        <Input type="text" placeholder="example@email.com" maxLength="60" onChange={this.onEmailChange} />
                        <Label>Phone Number</Label>
                        <Input type="text" placeholder="555-555-5555" maxLength="20" onChange={this.onPhoneChange} />
                        <Label>Order Reference</Label><small> *This is used solely for your references*</small>
                        <Input type="text" placeholder="Order Reference" maxLength="128" onChange={this.onOrderReferenceChange} />
                    </ModalBody>
                    <ModalFooter>
                        {/*Attempt to submit the order*/}
                        <Button color="success" onClick={this.createOrder}>Submit Order</Button>{' '}
                        {/*Close the modal and don't send the order*/}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(UserCheckoutModal);