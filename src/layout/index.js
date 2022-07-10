import React from "react";
import Navbar from "./Navbar";
import {Container} from "reactstrap";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <Container className="main-content">
                {props.children}
            </Container>
        </div>
    )
}

export default Layout;
