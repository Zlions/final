import React from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import { Route, Switch } from "react-router";
import Base from "./pages/Index";
import Intro from "./pages/Intro";

const CompanyPage: React.FC = () => {
    return (
        <div className={style.page_content}>
            <div className={style.company_side}>
                <h3>编辑公司资料</h3>
                <div className={style.company_tab}>
                    <a
                        href="/boss/personal/comPage/"
                        className={
                            location.pathname === "/boss/personal/comPage/"
                                ? style.active
                                : ""
                        }
                    >
                        <div className={style.text}>公司基本信息</div>
                        <div className={style.op}>
                            <i className={icon.iconfont}>&#xe601;</i>
                        </div>
                    </a>
                    <a
                        href="/boss/personal/comPage/intro/"
                        className={
                            location.pathname === "/boss/personal/comPage/intro/"
                                ? style.active
                                : ""
                        }
                    >
                        <div className={style.text}>公司介绍</div>
                        <div className={style.op}>
                            <i className={icon.iconfont}>&#xe601;</i>
                        </div>
                    </a>
                    <a href="/">
                        <div className={style.text}>公司福利</div>
                        <div className={style.op}>
                            <i className={icon.iconfont}>&#xe601;</i>
                        </div>
                    </a>
                    <a href="/">
                        <div className={style.text}>公司相册</div>
                        <div className={style.op}>
                            <i className={icon.iconfont}>&#xe601;</i>
                        </div>
                    </a>
                </div>
            </div>
            <div className={style.company_content}>
                <Switch>
                    <Route
                        path="/boss/personal/comPage/intro"
                        exact
                        component={Intro}
                    />
                    <Route
                        path="/boss/personal/comPage/"
                        exact
                        component={Base}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default CompanyPage;
