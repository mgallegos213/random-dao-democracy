import React from "react";
import {Route, Switch} from "react-router-dom";
import IndexPage from "../pages/IndexPage";

const Routes = () => {
    return(
        <main style={{textAlign: "center"}}>
            <Switch>
                <Route exact key="/" path="/" component={IndexPage} />;
            </Switch>
        </main>
    )
};

export default Routes;