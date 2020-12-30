import React, { useEffect, useState } from "react";
import style from "./App.scss";
import "@/global.css";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import api from "@/api";
import Selected from "@/index/components/Selected";

const Register = () => {
    useEffect(() => {
        api.getCompanyByUid(localStorage.getItem("curUser") as string).then(
            (resp) => {
                if (resp.data.data) {
                    message.error("检测到你已有公司账号，将自动跳转", 1);
                    setTimeout(() => {
                        location.pathname = "/boss";
                    }, 1000);
                }
            }
        );
    }, []);
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

    useEffect(() => {
        api.getCompanyType().then((resp) => {
            if (resp.data.data.length != 0) {
                let newTypes: any[] = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    newTypes.push(resp.data.data[i].name);
                }
                setTypes([...newTypes]);
            }
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
        api.saveCompany({ ...company, owner: uid }).then((resp) => {
            console.log(resp);
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
