import React, {useState} from "react";
import {Button, Col, Row, Table} from "reactstrap";
import Breadcrumbs from "../../components/Breadcrumb";
import Create from "./components/Create";

const Products = () => {

    const [createProduct, setCreateProduct] = useState(false);
    const toggleCreate = () => setCreateProduct(!createProduct);

    const [editProduct, setEditProduct] = useState(false);
    const toggleEdit = () => setEditProduct(!editProduct);

    const edit = () => {

    }

    let breadcrumbItems = [
        {title: "Catalogue", link: "/"},
        {title: "Products", link: "/products"},
    ];

    return (
        <>
            <Row className="align-items-center my-4">
                <Col md={6}>
                    <h1 className="mb-0">Products</h1>
                </Col>
                <Col md={6} style={{ textAlign: "right" }}>
                    <Breadcrumbs breadcrumbItems={breadcrumbItems} />
                </Col>
            </Row>
            <Row className="justify-content-end my-4">
                <Col md={2}  style={{ textAlign: "right" }}>
                    <Button onClick={toggleCreate} className="fw-bold" color="primary" block> <i className="fa fa-plus" /> Add Product</Button>
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
                            <th>Comments</th>
                            <th>Brand</th>
                            <th>Stock</th>
                            <th>Shipment Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Producto 1</td>
                            <td>S</td>
                            <td>Comentarios...</td>
                            <td>Brand</td>
                            <td>3</td>
                            <td>01-01-2000</td>
                            <td>
                                <i className="fa fa-edit text-primary" style={{ marginRight: "10px", fontSize: "20px"  }}/>
                                <i className="fa fa-trash text-danger" style={{ fontSize: "20px" }}/>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Create modal={createProduct} toggle={toggleCreate} />
        </>
    )
}

export default Products;
