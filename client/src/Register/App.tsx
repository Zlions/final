import React from "react";
import style from "./App.scss";
import '@/global.css'

const Register = () => {
    return (
        <div className={style.page_sign}>
            <div className={style.sign_content}>
                <div className={style.inner_box}>
                    <h1>Register</h1>
                    <form action="/login" method="post" className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="用户名"
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="电话号码"
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="password"
                                placeholder="密码"
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="password"
                                placeholder="确认密码"
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_btn}>
                            <button className={style.btn_login}>注册</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
