import React, {useEffect, useState} from "react";
import {Button, Col, Row, Table} from "reactstrap";
import Breadcrumbs from "../../components/Breadcrumb";
import Create from "./components/Create";
import {axiosApi} from "../../helpers/api";
import Edit from "./components/Edit";
import Swal from "sweetalert2";

const Products = () => {

    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState(null);

    //State to manage create modal
    const [createProduct, setCreateProduct] = useState(false);
    const toggleCreate = () => setCreateProduct(!createProduct);

    // State to manage edit modal
    const [editProduct, setEditProduct] = useState(false);
    const toggleEdit = () => setEditProduct(!editProduct);

    /**
     * @desc Method to open edit modal.
     * @returns {Promise<void>}
     * @param product
     */
    const edit = async (product) => {
        await setProduct(product);
        toggleEdit();
    }

    /**
     * @desc Method to get products records.
     * @returns {Promise<void>}
     */
    const getProducts = async () => {
        await axiosApi.get('product')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }

    /**
     * @desc Method to delete brand record.
     * @param id
     * @returns {Promise<void>}
     */
    const deleteProduct = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to delete this record?, this action cannot be undone.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'red'
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    await axiosApi.delete(`product/${id}`)
                        .then(response => {
                            Swal.fire({
                                title: "Success!",
                                text: "The record was deleted with success",
                                icon: "success"
                            });

                            getProducts();
                        })
                        .catch(error => console.error(error));
                }
            })
    }

    let breadcrumbItems = [
        {title: "Catalogue", link: "/"},
        {title: "Products", link: "/products"},
    ];

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <Row className="align-items-center my-4">
                <Col md={6}>
                    <h1 className="mb-0">Products</h1>
                </Col>
                <Col md={6} style={{textAlign: "right"}}>
                    <Breadcrumbs breadcrumbItems={breadcrumbItems}/>
                </Col>
            </Row>
            <Row className="justify-content-end my-4">
                <Col md={2} style={{textAlign: "right"}}>
                    <Button onClick={toggleCreate} className="fw-bold" color="primary" block> <i
                        className="fa fa-plus"/> Add Product</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <Table responsive bordered borderless>
                        <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th style={{width: "30%"}}>Comments</th>
                            <th>Brand</th>
                            <th>Stock</th>
                            <th>Shipment Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            products.map((product, index) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.size.size}</td>
                                    <td style={{textAlign: "justify"}}>{product.remarks}</td>
                                    <td>{product.brand.name}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.shipment_date}</td>
                                    <td>
                                        <i onClick={() => edit(product)} className="fa fa-edit text-primary"
                                           style={{marginRight: "10px", fontSize: "20px"}}/>
                                        <i onClick={() => deleteProduct(product.id)} className="fa fa-trash text-danger"
                                           style={{fontSize: "20px"}}/>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Create modal={createProduct} toggle={toggleCreate} getProducts={getProducts}/>

            {
                product ?
                    <Edit modal={editProduct} toggle={toggleEdit} product={product} getProducts={getProducts}/> : <></>
            }
        </>
    )
}

export default Products;
