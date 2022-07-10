import React from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Edit = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>
                Edit Product
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter product name..." type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label for="size">Size</Label>
                    <Input id="size" name="size" placeholder="Select size of product..." type="select"/>
                </FormGroup>
                <FormGroup>
                    <Label for="comments">Comments</Label>
                    <Input id="comments" name="comments" placeholder="Enter comments of product..." type="textarea"/>
                </FormGroup>
                <FormGroup>
                    <Label for="brand">Brand</Label>
                    <Input id="brand" name="brand" placeholder="Select brand of product..." type="select"/>
                </FormGroup>
                <FormGroup>
                    <Label for="stock">Stock</Label>
                    <Input id="stock" name="stock" placeholder="Enter the number of existences of the product..." type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label for="shipment_date">Shipment Date</Label>
                    <Input id="shipment_date" name="shipment_date" placeholder="Select the shipment date..." type="date"/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.toggle}>
                    Cancel
                </Button> {' '}
                <Button
                    color="primary"
                    onClick={function noRefCheck(){}}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default Edit;
