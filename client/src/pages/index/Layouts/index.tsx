import React from "react";
import style from "./index.scss";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import JobList from "../pages/JobList";
import CompanyList from "../pages/CompanyList";
import JobDetail from "../pages/JobDetail";
import CompanyItem from "../pages/CompanyItem";
import Error from "../pages/404";
import Personal from "../pages/Personal";

const BasicLayout: React.FC = (props) => {

    return (
        <div>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.content}>
                <Switch>
                    <Route path="/job_list" exact component={JobList} />
                    <Route path="/job_item/:id" component={JobDetail} />
                    <Route path="/company_list" exact component={CompanyList} />
                    <Route path="/company_item/:id" component={CompanyItem} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/" exact component={Index} />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        </div>
    );
};

export default BasicLayout;
