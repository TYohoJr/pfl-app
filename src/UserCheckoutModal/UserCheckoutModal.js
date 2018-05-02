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
        this.state = {
            modal: false
        };
    }

    toggle() {
        if (!this.props.userOrderCartReducer.userCartArray.length){
            alert("Your cart is empty!");
            return;
        }
        this.setState({
            modal: !this.state.modal
        });
    }

    createOrder() {
        axios.post("/createOrder", { userDetails:this.props.userDetailsReducer, orderDetails:this.props.userOrderCartReducer.userCartArray }).then((result) => {
            console.log(result.data);
        })
    }

    onFirstNameChange(e){
        this.props.dispatch({
            type:"onFirstNameChange",
            firstName: e.target.value
        })
    }

    onLastNameChange(e){
        this.props.dispatch({
            type:"onLastNameChange",
            lastName: e.target.value
        })
    }

    onCompanyNameChange(e){
        this.props.dispatch({
            type:"onCompanyNameChange",
            companyName: e.target.value
        })
    }

    onAddressOneChange(e){
        this.props.dispatch({
            type:"onAddressOneChange",
            addressOne: e.target.value
        })
    }

    onAddressTwoChange(e){
        this.props.dispatch({
            type:"onAddressTwoChange",
            addressTwo: e.target.value
        })
    }

    onCityChange(e){
        this.props.dispatch({
            type:"onCityChange",
            city: e.target.value
        })
    }

    onStateChange(e){
        this.props.dispatch({
            type:"onStateChange",
            userState: e.target.value
        })
    }

    onPostalCodeChange(e){
        this.props.dispatch({
            type:"onPostalCodeChange",
            postalCode: e.target.value
        })
    }
    
    onCountryCodeChange(e){
        this.props.dispatch({
            type:"onCountryCodeChange",
            countryCode: e.target.value
        })
    }

    onEmailChange(e){
        this.props.dispatch({
            type:"onEmailChange",
            email: e.target.value
        })
    }

    onPhoneChange(e){
        this.props.dispatch({
            type:"onPhoneChange",
            phone: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Checkout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Customer Info</ModalHeader>
                    <ModalBody>
                        <Label>Name</Label>
                        <Input type="text" placeholder="First Name" onChange={this.onFirstNameChange}/>
                        <Input type="text" placeholder="Last Name" onChange={this.onLastNameChange}/>
                        <Label>Company Name</Label>
                        <Input type="text" placeholder="Company Name" onChange={this.onCompanyNameChange}/>
                        <Label>Address</Label>
                        <Input type="text" placeholder="Address Line 1" onChange={this.onAddressOneChange}/>
                        <Input type="text" placeholder="Address Line 2" onChange={this.onAddressTwoChange}/>
                        <Input type="text" placeholder="City" onChange={this.onCityChange}/>
                        <Input type="text" placeholder="State" onChange={this.onStateChange}/>
                        <Input type="text" placeholder="Postal Code" onChange={this.onPostalCodeChange}/>
                        <Input type="text" placeholder="Country Code" onChange={this.onCountryCodeChange}/>
                        <Label>Contact Info</Label>
                        <Input type="text" placeholder="Email" onChange={this.onEmailChange}/>
                        <Input type="text" placeholder="Phone" onChange={this.onPhoneChange}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.createOrder}>Submit Order</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(UserCheckoutModal);