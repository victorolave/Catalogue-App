import React from "react";
import Products from "../pages/Products";
import Brands from "../pages/Brands";
import {Redirect} from "react-router-dom";

const routes = [
    { path: "/products", exact: true, component: Products },
    { path: "/brands", exact: true, component: Brands },

    { path: "/", exact: true, component: () => <Redirect to="/products" /> },
];

export { routes };

