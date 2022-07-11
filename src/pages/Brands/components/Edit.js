import React, { useState } from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {axiosApi} from "../../../helpers/api";
import Swal from "sweetalert2";
import {toast} from "react-hot-toast";

const Edit = (props) => {

    const { brand } = props;

    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    /**
     * @desc Method to save the update.
     * @returns {Promise<void>}
     */
    const save = async () => {
        if (validate()) {
            let data = {
                name: name,
                code: code
            };

            await axiosApi.put(`brand/${brand.id}`, data)
                .then(response => {
                    props.toggle();
                    props.getBrands();

                    Swal.fire({
                        title: "Success!",
                        text: "The record was updated with success",
                        icon: "success"
                    })
                })
                .catch(error => {
                    toast.error("Something was wrong, try again later...")
                });
        }
    }

    const setData = () => {
        setName(brand.name);
        setCode(brand.code);
    }

    /**
     * @desc Method to validate fields.
     * @returns {boolean}
     */
    const validate = () => {
        if (name.length && code.length) return true;
        else {
            toast.error("All fields are required")
        }
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered onOpened={setData}>
            <ModalHeader toggle={props.toggle}>
                Edit Brand
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
                    Update
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default Edit;
