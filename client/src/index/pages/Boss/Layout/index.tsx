import React, { useEffect, useState } from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import { Route, Switch } from "react-router";
import Position from "../pages/Position";
import PositionDetail from "../pages/PositionDetail";
import Personal from "../pages/Personal";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import avatar from "~/assets/comAvatar.jpg";
import api from "@/api";
import SendResume from "../pages/SendResume";
const BossLayout: React.FC = (props) => {
    if (!localStorage.getItem("curUser") || !localStorage.getItem("curComp")) {
        message.error("你暂无权限访问该页面，自动跳转到首页", 1);
        setTimeout(() => {
            location.pathname = "/";
        }, 1000);
        return <div></div>;
    }

    const [name, setName] = useState("");

    useEffect(() => {
        api.getCompanyById(localStorage.getItem("curComp") as string).then(
            (resp) => {
                setName(resp.data.data.name);
            }
        );
    }, []);

    function handleClick() {
        localStorage.removeItem("curComp");
        location.pathname = "/";
    }

    return (
        <>
            <header className={style.header}>
                <div className={style.boss_v}>企业版</div>
                <div className={style.inner}>
                    <div className={style.user_info}>
                        <span className={style.switch} onClick={handleClick}>
                            切换为求职者
                        </span>
                        <span className={style.info_name}>{name}</span>
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </header>
            <div className={style.content}>
                <aside className={style.side_menu}>
                    <div className={style.avator}>
                        <img src={avatar} alt="" />
                        <p>{name}</p>
                        <ul className={style.menu}>
                            <li
                                className={
                                    location.pathname == "/boss" ||
                                    location.pathname == "/boss/"
                                        ? style.cur
                                        : ""
                                }
                            >
                                <i className={icon.iconfont}>&#xe626;</i>
                                <span>
                                    <a href="/boss/"> 职位管理</a>
                                </span>
                            </li>
                            <li
                                className={
                                    location.pathname.indexOf(
                                        "/boss/send_resume"
                                    ) !== -1
                                        ? style.cur
                                        : ""
                                }
                            >
                                <i className={icon.iconfont}>&#xe603;</i>
                                <span>
                                    <a href="/boss/send_resume">简历投递</a>{" "}
                                </span>
                            </li>
                            <li
                                className={
                                    location.pathname.indexOf(
                                        "/boss/personal"
                                    ) !== -1
                                        ? style.cur
                                        : ""
                                }
                            >
                                <i className={icon.iconfont}>&#xe688;</i>
                                <span>
                                    <a href="/boss/personal">我的资料</a>{" "}
                                </span>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className={style.main}>
                    <Switch>
                        <Route
                            path="/boss/position_detail"
                            exact
                            component={PositionDetail}
                        />
                        {/* <Route path="/boss/com_page" component={CompanyPage} /> */}
                        <Route path="/boss/personal" component={Personal} />
                        <Route
                            path="/boss/send_resume"
                            component={SendResume}
                        />
                        <Route path="/boss/" exact component={Position} />
                    </Switch>
                </main>
            </div>
        </>
    );
};

export default BossLayout;
