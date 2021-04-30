import React, { useState } from "react";
import style from "./App.scss";
import "@/global.css";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import api from "@/api";

const Register = () => {
    const id = localStorage.getItem("curUser");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [surePwd, setSurePwd] = useState("");

    function handleClick() {
        if (!email || !pwd || !surePwd) {
            message.error("不允许出现空字段！");
            return;
        }
        if (pwd !== surePwd) {
            message.error("密码与确认密码不同！");
            return;
        }
        api.resetUserPwd({ email, pwd, id }).then((resp) => {
            if (!resp.data.err) {
                message.success("修改成功，跳转首页", 1);
                location.pathname = "/";
                return;
            } else {
                message.error(resp.data.err);
            }
        });
    }

    return (
        <div className={style.page_sign}>
            <div className={style.sign_content}>
                <div className={style.inner_box}>
                    <h1>修改密码</h1>
                    <div className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="邮箱"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="password"
                                placeholder="密码"
                                value={pwd}
                                onChange={(e) => {
                                    setPwd(e.target.value);
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="password"
                                placeholder="确认密码"
                                value={surePwd}
                                onChange={(e) => {
                                    setSurePwd(e.target.value);
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_btn}>
                            <button
                                className={style.btn_login}
                                onClick={handleClick}
                            >
                                确认修改
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
