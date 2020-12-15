import React from "react";
import style from "./App.scss";
import "@/global.css";

const Login: React.FC = () => {
    return (
        <div className={style.page_sign}>
            <div className={style.sign_content}>
                <div className={style.inner_box}>
                    <h1>Login</h1>
                    <form method="post" className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="用户名 / 邮箱"
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
                        <div className={style.form_btn}>
                            <button className={style.btn_login}>登陆</button>
                        </div>
                        <div className={style.text_tip}>
                            <span className={style.forget}>忘记密码</span>
                            <span className={style.reg}>免费注册</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
