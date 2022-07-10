import React from "react";
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar as TopNav,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

const Navbar = (props) => {
    return (
        <TopNav
            color="primary"
            dark
            expand="md"
            fixed="top"
            light
        >
            <NavbarBrand href="/">
                CATALOGUE
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/products">
                            Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/brands">
                            Brands
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </TopNav>
    )
}

export default Navbar;
