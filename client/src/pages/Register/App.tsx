import React, { useState } from "react";
import style from "./App.scss";
import "@/global.css";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import api from "@/api";

const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [surePwd, setSurePwd] = useState("");

    function handleRegisterClick() {
        // 判断空字段
        if (!name || !phone || !email || !pwd || !surePwd) {
            message.error("不允许出现空字段！");
            return;
        }
        if (pwd !== surePwd) {
            message.error("密码与确认密码不同！");
            return;
        }
        if (phone.length != 11) {
            message.error("电话号码长度必须为11位数");
            return;
        }
        api.saveUser({ name, phone, email, pwd }).then((resp) => {
            if (!resp.data.err) {
                message.success("注册成功，即将跳转页面");
                localStorage.setItem("curUser", resp.data.data.id);
                localStorage.setItem("curUserName", resp.data.data.name);
                setTimeout(() => {
                    location.pathname = "/";
                }, 1000);
                return;
            }
            message.error(resp.data.err);
            return;
        });
    }

    return (
        <div className={style.page_sign}>
            <div className={style.sign_content}>
                <div className={style.inner_box}>
                    <h1>Register</h1>
                    <div className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="用户名"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="电话号码"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
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
                                onClick={handleRegisterClick}
                            >
                                注册并登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
