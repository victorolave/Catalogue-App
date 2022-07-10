import React from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Edit = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>
                Edit Brand
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter brand name..." type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label for="code">Code</Label>
                    <Input id="code" name="code" placeholder="Enter brand code..." type="text"/>
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
