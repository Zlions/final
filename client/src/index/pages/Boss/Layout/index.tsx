import React from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import { Route, Switch } from "react-router";
import Position from "../pages/Position";
import PositionDetail from "../pages/PositionDetail";
import Personal from "../pages/Personal";

const BossLayout: React.FC = (props) => {
    return (
        <>
            <header className={style.header}>
                <div className={style.boss_v}>企业版</div>
                <div className={style.inner}>
                    <div className={style.user_info}>
                        <i className={icon.iconfont}>&#xe602;</i>
                        <span className={style.have_msg}></span>
                        <span className={style.info_name}>有限公司</span>
                        <img src="~/assets/manDefaultAvatar.jpg" alt="" />
                    </div>
                </div>
            </header>
            <div className={style.content}>
                <aside className={style.side_menu}>
                    <div className={style.avator}>
                        <img src="~/assets/manDefaultAvatar.jpg" alt="" />
                        <p>有限公司</p>
                        <ul className={style.menu}>
                            <li className={location.pathname === '/boss/' ? style.cur : ''}>
                                <i className={icon.iconfont}>&#xe626;</i>
                                <span><a href="/boss/"> 职位管理</a></span>
                            </li>
                            <li>
                                <i className={icon.iconfont}>&#xe603;</i>
                                <span>推荐牛人</span>
                            </li>
                            <li className={location.pathname === '/personal/' ? style.cur : ''}>
                                <i className={icon.iconfont}>&#xe688;</i>
                                <span><a href="/boss/personal">我的资料</a> </span>
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
                        <Route path="/boss/personal" component={Personal} />
                        <Route path="/boss/" exact component={Position} />
                    </Switch>
                </main>
            </div>
        </>
    );
};

export default BossLayout;
