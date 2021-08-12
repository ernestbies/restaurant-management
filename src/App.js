import {Route, Switch, Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";
import AddProduct from "./pages/AddProduct/AddProduct";
import Settings from "./pages/Settings/Settings";
import Faq from "./pages/Faq/Faq";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route exact path={'/products'} component={ManageProducts}/>
                <Route exact path={'/add-dish'} component={AddProduct}/>
                <Route exact path={'/edit-dish/:id'} component={AddProduct}/>
                <Route exact path={'/faq'} component={Faq}/>
                <Route exact path={'/settings'} component={Settings}/>
                <Route exact path={'/page-not-found'} component={PageNotFound}/>
                <Redirect from={'/*'} to={'/page-not-found'}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
