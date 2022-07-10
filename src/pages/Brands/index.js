import React, {useState} from "react";
import {Button, Col, Row, Table} from "reactstrap";
import Breadcrumbs from "../../components/Breadcrumb";
import Create from "./components/Create";

const Brands = () => {

    const [createBrand, setCreateBrand] = useState(false);
    const toggleCreate = () => setCreateBrand(!createBrand);

    const [editBrand, setEditBrand] = useState(false);
    const toggleEdit = () => setEditBrand(!editBrand);

    const edit = () => {

    }

    let breadcrumbItems = [
        {title: "Catalogue", link: "/"},
        {title: "Brands", link: "/brands"},
    ];

    return (
        <>
            <Row className="align-items-center my-4">
                <Col md={6}>
                    <h1 className="mb-0">Brands</h1>
                </Col>
                <Col md={6} style={{ textAlign: "right" }}>
                    <Breadcrumbs breadcrumbItems={breadcrumbItems} />
                </Col>
            </Row>
            <Row className="justify-content-end my-4">
                <Col md={2}  style={{ textAlign: "right" }}>
                    <Button onClick={toggleCreate} className="fw-bold" color="primary" block> <i className="fa fa-plus" /> Add Brand</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <Table responsive bordered borderless>
                        <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Marca 1</td>
                            <td>PRO01</td>
                            <td>
                                <i className="fa fa-edit text-primary" style={{ marginRight: "10px", fontSize: "20px"  }}/>
                                <i className="fa fa-trash text-danger" style={{ fontSize: "20px" }}/>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Create modal={createBrand} toggle={toggleCreate} />
        </>
    )
}

export default Brands;
