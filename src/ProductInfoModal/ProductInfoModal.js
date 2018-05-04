import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ProductInfoModal.css"

class ProductInfoModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button id="product-list-button" onClick={this.toggle}>{this.props.productName}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.productName}</ModalHeader>
                    <ModalBody>
                        <img id="product-modal-img" src={this.props.imageURL} alt="no example available" />
                        <p>Last Updated: {this.props.lastUpdated}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ProductInfoModal;