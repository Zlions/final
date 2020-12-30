import React from "react";
import Layout from "./Layouts";
import "../global.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BossLayout from "./pages/Boss/Layout";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/boss" component={BossLayout}></Route>
                    <Route path="/" component={Layout}></Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
