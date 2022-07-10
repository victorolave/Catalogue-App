import React from "react";
import {Switch} from "react-router-dom";
import {routes} from "./routes/";
import Route from "./routes/route";

const App = () => {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={index}
                    />
                ))
            }
        </Switch>
    );
}

export default App;
