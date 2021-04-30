import React, { useEffect, useState } from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import avatar from "~/assets/avatar.jpg";
import api from "@/api";
import { message } from "antd";

const HeaderLayout: React.FC = () => {
    const [isLogin, setisLogin] = useState(false);
    const [isAvatarHover, setisAvatarHover] = useState(false);

    let AvatarTimer: NodeJS.Timeout;
    useEffect(() => {
        const uid = localStorage.getItem("curUser");
        console.log(uid, 'uid -- ')
        if (uid) {
            setisLogin(true);
        }
    }, []);

    function handleClick() {
        const uid = localStorage.getItem("curUser");
        // 判断是否存在公司账号
        api.getCompanyByUid(uid as string).then((resp) => {
            if (!resp.data.data) {
                location.pathname = "company_reg.html";
            } else {
                if (resp.data.data[0].auditing) {
                    message.info(
                        "您的公司目前正在审核，暂无法成功切换，请耐心等待"
                    );
                    return;
                }
                localStorage.setItem("curComp", resp.data.data[0].id);
                location.pathname = "/boss";
            }
        });
    }

    return (
        <div className={style.header_inner}>
            <div className={style.logo}>
                <a href="/" className={style.a}>
                    求职网
                </a>
            </div>
            <div className={style.nav_city}>
                <div className={style.nav_city_box}>
                    <i className={`${icon.iconfont} ${style.icon_pos}`}>
                        &#xe6f8;
                    </i>
                    <span className={style.nav_city_selected}>厦门</span>
                    <span className={style.switch_city}>[切换城市]</span>
                </div>
            </div>
            <div className={style.nav}>
                <ul>
                    <li className={location.pathname === "/" ? style.cur : ""}>
                        <a href="/">首页</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/job_list" ? style.cur : ""
                        }
                    >
                        <a href="/job_list">职位</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/company_list"
                                ? style.cur
                                : ""
                        }
                    >
                        <a href="/company_list">公司</a>
                    </li>
                </ul>
            </div>
            <div className={style.user_nav}>
                <div className={style.btns}>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                        }}
                        className={style.recruit}
                    >
                        我要招聘
                    </a>
                    <span className={style.user_name}>
                        {/* {localStorage.getItem("curUserName")} */}
                        user1
                    </span>
                    {/* 已登录显示 */}
                    <div
                        className={style.avatar}
                        style={{ display: isLogin ? "block" : "none" }}
                        onMouseEnter={() => {
                            setisAvatarHover(true);
                        }}
                        onMouseLeave={() => {
                            AvatarTimer = setTimeout(() => {
                                setisAvatarHover(false);
                            }, 500);
                        }}
                    >
                        <img src={avatar} alt="" />
                        <ul
                            style={{
                                display: isAvatarHover ? "block" : "none",
                            }}
                            onMouseEnter={() => {
                                if (AvatarTimer) {
                                    clearTimeout(AvatarTimer);
                                }
                                setisAvatarHover(true);
                            }}
                            onMouseLeave={() => {
                                setisAvatarHover(false);
                            }}
                        >
                            <li>
                                <a href="/personal">个人中心</a>
                            </li>
                            <li>
                                <a href="/resetPsd.html">修改密码</a>
                            </li>
                            <li onClick={handleClick}>切换为招聘者</li>
                            <li
                                onClick={() => {
                                    localStorage.clear();
                                    location.pathname = "login.html";
                                }}
                            >
                                退出登录
                            </li>
                        </ul>
                    </div>
                    {/* 未登录显示 */}
                    <div
                        className={style.options_btns}
                        style={{ display: isLogin ? "none" : "block" }}
                    >
                        <a href="/register.html" className={style.btn}>
                            注册
                        </a>
                        <a href="/login.html" className={style.btn}>
                            登陆
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderLayout;
