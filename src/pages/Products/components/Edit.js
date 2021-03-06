import React, { useState, useEffect } from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {axiosApi} from "../../../helpers/api";
import Swal from "sweetalert2";
import {toast} from "react-hot-toast";

const Edit = (props) => {

    const { product } = props;

    // Form States
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [remarks, setRemarks] = useState('');
    const [brand, setBrand] = useState('');
    const [stock, setStock] = useState('');
    const [shipmentDate, setShipmentDate] = useState('');

    // Brand and Size selects options
    const [brands, setBrands] = useState([]);
    const [sizes, setSizes] = useState([]);

    /**
     * @desc Method to save the update.
     * @returns {Promise<void>}
     */
    const save = async () => {
        let data = {
            name: name,
            size_id: size,
            remarks: remarks,
            brand_id: brand,
            stock: stock,
            shipment_date: shipmentDate
        }

        await axiosApi.put(`product/${product.id}`, data)
            .then(response => {
                props.toggle();
                props.getProducts();

                Swal.fire({
                    title: "Success!",
                    text: "The record was updated with success",
                    icon: "success"
                })
            })
            .catch(error => console.log(error));
    }

    /**
     * @desc Method to get brands.
     * @returns {Promise<void>}
     */
    const getBrands = async () => {
        await axiosApi.get('brand')
            .then(response => setBrands(response.data))
            .catch(error => console.error(error));
    }

    /**
     * @desc Method to get sizes.
     * @returns {Promise<void>}
     */
    const getSizes = async () => {
        await axiosApi.get('size')
            .then(response => setSizes(response.data))
            .catch(error => console.error(error));
    }

    const setData = () => {
        setName(product.name)
        setSize(product.size_id)
        setRemarks(product.remarks)
        setBrand(product.brand_id)
        setStock(product.stock)
        setShipmentDate(product.shipment_date)
    }

    /**
     * @desc Method to validate fields.
     * @returns {boolean}
     */
    const validate = () => {
        if (name.length && size !== '' && remarks.length && brand !== '' && stock.length && shipmentDate !== '') return true;
        else {
            toast.error("All fields are required")
        }
    }

    useEffect(() => {
        getBrands();
        getSizes();
    }, [])

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered onOpened={setData}>
            <ModalHeader toggle={props.toggle}>
                Edit Product
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter product name..." type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="size">Size</Label>
                    <Input id="size" name="size" placeholder="Select size of product..." type="select" value={size} onChange={(e) => setSize(e.target.value)} >
                        {
                            sizes.map((size, index) => <option key={index} value={size.id}>{ size.size }</option>)
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="comments">Comments</Label>
                    <Input id="comments" name="comments" placeholder="Enter comments of product..." type="textarea" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="brand">Brand</Label>
                    <Input id="brand" name="brand" placeholder="Select brand of product..." type="select" value={brand} onChange={(e) => setBrand(e.target.value)} >
                        {
                            brands.map((brand, index) => <option key={index} value={brand.id}>{ brand.name }</option>)
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="stock">Stock</Label>
                    <Input id="stock" name="stock" placeholder="Enter the number of existences of the product..." type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="shipment_date">Shipment Date</Label>
                    <Input id="shipment_date" name="shipment_date" placeholder="Select the shipment date..." type="date" value={shipmentDate} onChange={(e) => setShipmentDate(e.target.value)} />
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

export default Edit;
