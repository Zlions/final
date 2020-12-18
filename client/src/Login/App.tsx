import React, { useState } from "react";
import style from "./App.scss";
import "@/global.css";
import api from '@/api';
import { message } from "antd";
import "antd/lib/message/style/index.css";

const Login: React.FC = () => {

    const [userName, setUserName] = useState('')
    const [userPwd, setUserPwd] = useState('')

    // 点击登录事件
    function handleClick() {
        if(!userName || !userPwd) {
            message.info('用户名或密码不能为空！');
            return;
        }
        api.userLogin({userId: userName, pwd: userPwd}).then(resp => {
            if(!resp.data.err) {
                message.success('登录成功，即将跳转页面', 1);
                localStorage.setItem('curUser', `${JSON.stringify(resp.data.data)}`)
                setTimeout(() => {
                location.pathname = '/'
                    
                }, 1500);
            } else {
                message.error(resp.data.err);
            }
        })
    }
    return (
        <div className={style.page_sign}>
            <div className={style.sign_content}>
                <div className={style.inner_box}>
                    <h1>Login</h1>
                    <div className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="用户名 / 邮箱"
                                className={`${style.row_input} ${style.user}`}
                                value={userName}
                                onChange={(e)=>{
                                    setUserName(e.target.value)
                                }}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="password"
                                placeholder="密码"
                                className={`${style.row_input} ${style.user}`}
                                value={userPwd}
                                onChange={e => {
                                    setUserPwd(e.target.value)
                                }}
                            />
                        </div>
                        <div className={style.form_btn}>
                            <button
                                className={style.btn_login}
                                onClick={handleClick}
                            >
                                登陆
                            </button>
                        </div>
                        <div className={style.text_tip}>
                            <span className={style.forget}>忘记密码</span>
                            <span className={style.reg}>
                                <a href="/register.html">免费注册</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
