import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
