import React from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";

const HeaderLayout: React.FC = () => {
    return (
        <div className={style.header_inner}>
            <div className={style.logo}>
                <a href="/" className={style.a}>
                    求职网
                </a>
            </div>
            <div className={style.nav_city}>
                <div className={style.nav_city_box}>
                    <i className={`${icon.iconfont} ${style.icon_pos}`}>&#xe6f8;</i>
                    <span className={style.nav_city_selected}>厦门</span>
                    <span className={style.switch_city}>[切换城市]</span>
                </div>
            </div>
            <div className={style.nav}>
                <ul>
                    <li className={location.pathname === '/' ? style.cur : ""}>
                        <a href="/">首页</a>
                    </li>
                    <li className={location.pathname === '/job_list' ? style.cur : ""}>
                        <a href="/job_list">职位</a>
                    </li>
                    {/* <li>
                        <a href="/">校园</a>
                    </li> */}
                    <li className={location.pathname === '/company_list' ? style.cur : ""}>
                        <a href="/company_list">公司</a>
                    </li>
                    {/* <li>
                        <a href="/">资讯</a>
                    </li> */}
                </ul>
            </div>
            <div className={style.user_nav}>
                {/* 未登录 */}
                <div className={style.btns}>
                    <a href="/" className={style.recruit}>我要招聘</a>
                    <a href="/register.html" className={style.btn}>注册</a>
                    <a href="/login.html" className={style.btn}>登陆</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderLayout;
