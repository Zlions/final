import React from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import { Route, Switch } from "react-router";
import MyDatas from "./pages/Index";
import CompanyPage from "./pages/CompanyPage";

const Personal: React.FC = (props) => {
    let curPage = "data";
    return (
        <div className={style.wrapper}>
            <ul className={style.zhiliao}>
                <li
                    className={
                        location.pathname === "/boss/personal/" ? style.cur : ""
                    }
                >
                    <a href="/boss/personal/">我的资料</a>
                </li>
                <li
                    className={
                        location.pathname.indexOf('/boss/personal/comPage') === 0
                            ? style.cur
                            : ""
                    }
                >
                    <a href="/boss/personal/comPage">公司主页</a>
                </li>
            </ul>
            <Switch>
                <Route path="/boss/personal/comPage" component={CompanyPage} />
                <Route path="/boss/personal/" exact component={MyDatas} />
            </Switch>
        </div>
    );
};
export default Personal;
