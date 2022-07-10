import React from "react";
import {Route, Redirect} from "react-router-dom";
import Layout from "../layout";

const AppRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            );
        }}
    />
);

export default AppRoute;

