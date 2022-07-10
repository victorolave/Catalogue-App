import React, {useState} from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {axiosApi} from "../../../helpers/api";

const Create = (props) => {

    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    /**
     * @desc Method to save a new brand.
     * @returns {Promise<void>}
     */
    const save = async () => {
        let data = {
            name: name,
            code: code
        };

        await axiosApi.post('brand', data)
            .then(response => {
                props.toggle();
                props.getBrands();
            })
            .catch(error => console.log(error));
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>
                Create Brand
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter brand name..." type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="code">Code</Label>
                    <Input id="code" name="code" placeholder="Enter brand code..." type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.toggle}>
                    Cancel
                </Button> {' '}
                <Button
                    color="primary"
                    onClick={save}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default Create;
