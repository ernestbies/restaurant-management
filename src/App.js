import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";
import AddProduct from "./pages/AddProduct/AddProduct";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route exact path={'/add-dish'} component={AddProduct}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
