import React, {useEffect, useState} from "react";
import {Button, Col, Row, Table} from "reactstrap";
import Breadcrumbs from "../../components/Breadcrumb";
import Create from "./components/Create";
import {axiosApi} from "../../helpers/api";
import Edit from "./components/Edit";
import Swal from "sweetalert2";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    const [brand, setBrand] = useState(null);

    // State to manage create modal
    const [createBrand, setCreateBrand] = useState(false);
    const toggleCreate = () => setCreateBrand(!createBrand);

    // State to manage edit modal
    const [editBrand, setEditBrand] = useState(false);
    const toggleEdit = () => setEditBrand(!editBrand);

    /**
     * @desc Method to open edit modal.
     * @param brand
     * @returns {Promise<void>}
     */
    const edit = async (brand) => {
        await setBrand(brand);
        toggleEdit();
    }

    /**
     * @desc Method to get brands records.
     * @returns {Promise<void>}
     */
    const getBrands = async () => {
        await axiosApi.get('brand')
            .then(response => setBrands(response.data))
            .catch(error => console.error(error));
    }

    /**
     * @desc Method to delete brand record.
     * @param id
     * @returns {Promise<void>}
     */
    const deleteBrand = async (id) => {
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
                    await axiosApi.delete(`brand/${id}`)
                        .then(response => {

                            Swal.fire({
                                title: "Success!",
                                text: "The record was deleted with success",
                                icon: "success"
                            })

                            getBrands();
                        })
                        .catch(error => console.error(error));
                }
            })
    }

    let breadcrumbItems = [
        {title: "Catalogue", link: "/"},
        {title: "Brands", link: "/brands"},
    ];

    useEffect(() => {
        getBrands();
    }, []);


    return (
        <>
            <Row className="align-items-center my-4">
                <Col md={6}>
                    <h1 className="mb-0">Brands</h1>
                </Col>
                <Col md={6} style={{textAlign: "right"}}>
                    <Breadcrumbs breadcrumbItems={breadcrumbItems}/>
                </Col>
            </Row>
            <Row className="justify-content-end my-4">
                <Col md={2} style={{textAlign: "right"}}>
                    <Button onClick={toggleCreate} className="fw-bold" color="primary" block> <i
                        className="fa fa-plus"/> Add Brand</Button>
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
                        {
                            brands.map((brand, index) => (
                                <tr key={index}>
                                    <td>{brand.id}</td>
                                    <td>{brand.name}</td>
                                    <td>{brand.code}</td>
                                    <td>
                                        <i onClick={() => edit(brand)} className="fa fa-edit text-primary"
                                           style={{marginRight: "10px", fontSize: "20px"}}/>
                                        <i onClick={() => deleteBrand(brand.id)} className="fa fa-trash text-danger"
                                           style={{fontSize: "20px"}}/>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Create modal={createBrand} toggle={toggleCreate} getBrands={getBrands}/>

            {
                brand ? <Edit modal={editBrand} toggle={toggleEdit} brand={brand} getBrands={getBrands}/> : <></>
            }
        </>
    )
}

export default Brands;
