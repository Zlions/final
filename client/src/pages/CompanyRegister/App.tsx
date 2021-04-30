import React, { useEffect, useState } from "react";
import style from "./App.scss";
import "@/global.css";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import api from "@/api";
import Selected from "@/pages/index/components/Selected";
import { ICompanyType } from "@/types";

const Register = () => {
    // 判断当前登录账号下是否存在公司账号
    useEffect(() => {
        api.getCompanyByUid(localStorage.getItem("curUser") as string).then(
            (resp) => {
                if (resp.data.data) {
                    message.error("检测到你已有公司账号，将自动跳转", 1);
                    // 若有公司账号，则自动跳转至公司页面
                    setTimeout(() => {
                        location.pathname = "/boss";
                    }, 1000);
                }
            }
        );
    }, []);

    // 创建公司账号状态
    const [company, setCompany] = useState({
        name: "",
        scope: "",
        finance: "",
        type: "",
        comId: "",
        addr: "",
    });

    const [typeName, setTypeName] = useState("");

    const [types, setTypes] = useState<any[]>([]);

    // 获取所有的公司类型
    useEffect(() => {
        api.getCompanyType().then((resp) => {
            if (resp.data.data.length != 0) {
                let newTypes= resp.data.data.map((it:ICompanyType) => it.name)
                setTypes([...newTypes]);
                return;
            } 
            // 获取类型失败
            message.error('获取公司类型失败。');
        });
    }, []);

    function handleClick() {
        if (
            !company.name ||
            !company.scope ||
            !company.type ||
            !company.comId ||
            !company.finance
        ) {
            message.error("资料未填写完全");
            return;
        }

        const uid = localStorage.getItem("curUser");
        // 保存当前注册信息
        api.saveCompany({ ...company, owner: uid }).then((resp) => {
            if (!resp.data.err) {
                message.success("注册成功，请等待管理员审核", 1);
                setTimeout(() => {
                    location.pathname = "/";
                }, 1000);
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
                    <h1>Company{"  "}Register</h1>
                    <div className={style.form}>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="公司名"
                                value={company.name}
                                onChange={(e) => {
                                    setCompany({
                                        ...company,
                                        name: e.target.value,
                                    });
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_row}>
                            <Selected
                                inputValue={company.scope}
                                styleSheet={{
                                    width: 324,
                                    menuDisplay: false,
                                }}
                                choose={(scope: string) => {
                                    setCompany({ ...company, scope });
                                }}
                                inputPlaceholder="请选择公司规模"
                                selectMenu={[
                                    "0-20人",
                                    "20-99人",
                                    "100-499人",
                                    "500-999人",
                                    "1000-10000人",
                                ]}
                            />
                        </div>
                        <div className={style.form_row}>
                            <Selected
                                inputValue={company.finance}
                                styleSheet={{
                                    width: 324,
                                    menuDisplay: false,
                                }}
                                choose={(finance: string) => {
                                    setCompany({ ...company, finance });
                                }}
                                inputPlaceholder="请选择融资阶段"
                                selectMenu={[
                                    "未融资",
                                    "天使轮",
                                    "A轮",
                                    "B轮",
                                    "C轮",
                                    "D轮及以上",
                                ]}
                            />
                        </div>
                        <div className={style.form_row}>
                            <Selected
                                inputValue={typeName}
                                styleSheet={{
                                    width: 324,
                                    menuDisplay: false,
                                }}
                                choose={(type: string) => {
                                    setTypeName(type);
                                    api.getCompanyType().then((resp) => {
                                        if (resp.data.data.length != 0) {
                                            for (
                                                let i = 0;
                                                i < resp.data.data.length;
                                                i++
                                            ) {
                                                if (
                                                    resp.data.data[i].name ===
                                                    type
                                                ) {
                                                    type = resp.data.data[i].id;
                                                }
                                            }
                                            setCompany({ ...company, type });
                                        }
                                    });
                                }}
                                direction="top"
                                inputPlaceholder="请选择公司类型"
                                selectMenu={[...types]}
                            />
                        </div>
                        <div className={style.form_row}>
                            <input
                                type="text"
                                placeholder="统一社会信用代码"
                                value={company.comId}
                                onChange={(e) => {
                                    setCompany({
                                        ...company,
                                        comId: e.target.value,
                                    });
                                }}
                                className={`${style.row_input} ${style.user}`}
                            />
                        </div>
                        <div className={style.form_btn}>
                            <button
                                className={style.btn_login}
                                onClick={handleClick}
                            >
                                注册公司
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
