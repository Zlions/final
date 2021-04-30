import React, { useEffect, useState } from "react";
import style from "./App.scss";
import { Layout, Menu, message } from "antd";
import "antd/lib/layout/style/index.css";
import "antd/lib/menu/style/index.css";
import "@/global.css";
import CompanyItem from "./components/CompanyItem";
import api from "@/api";

const { Header, Content, Sider } = Layout;
const App = () => {
    const [option, setOption] = useState("company");

    const [optionArr, setOptionArr] = useState([] as any[]);
    // const [auditingCompany, setAuditingCompany] = useState([] as any[]);

    function companyOption() {
        api.getAllCompanyByCondition({ auditing: false }).then((resp) => {
            let temp = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                temp.push(
                    <li
                        className={style.company_item}
                        key={resp.data.data[i].id}
                    >
                        <CompanyItem
                            options={[
                                {
                                    name: "删除",
                                    event: () => {
                                        api.deleteCompany(
                                            resp.data.data[i].id
                                        ).then((resp) => {
                                            if (!resp.data.err) {
                                                message.success("删除成功");
                                                location.pathname = '/admin.html'
                                                return;
                                            }
                                            message.error(resp.data.err);
                                        });
                                    },
                                },
                            ]}
                            content={resp.data.data[i]}
                        />
                    </li>
                );
            }
            setOptionArr(temp);
        });
    }

    function auditingCompanyOption() {
        api.getAllCompanyByCondition({ auditing: true }).then((resp) => {
            let temp = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                temp.push(
                    <li
                        className={style.company_item}
                        key={resp.data.data[i].id}
                    >
                        <CompanyItem
                            options={[
                                {
                                    name: "通过",
                                    event: () => {
                                        api.updateCompany({
                                            ...resp.data.data[i],
                                            auditing: false,
                                        }).then((response) => {
                                            if (!response.data.err) {
                                                message.success("已通过");
                                                location.pathname = '/admin.html'
                                                return;
                                            }
                                            message.error(response.data.err);
                                        });
                                    },
                                },
                                {
                                    name: "拒绝",
                                    event: () => {
                                        api.deleteCompany(
                                            resp.data.data[i].id
                                        ).then((response) => {
                                            if (!response.data.err) {
                                                message.success("已拒绝");
                                                location.pathname = '/admin.html'
                                                return;
                                            }
                                            message.error(response.data.err);
                                        });
                                    },
                                },
                            ]}
                            content={resp.data.data[i]}
                        />
                    </li>
                );
            }
            setOptionArr(temp);
        });
    }
    useEffect(() => {
        if (option === "company") {
            companyOption();
        } else if (option === "auditingCompany") {
            auditingCompanyOption();
        }
    }, [option]);

    return (
        <>
            <Layout>
                <Header>
                    <h1 className={style.header_title}>
                        求职招聘网站 —— 后台管理系统
                    </h1>
                </Header>
                <Layout>
                    <Sider>
                        <ul className={style.sider_list}>
                            <li
                                className={
                                    option === "company" ? style.cur : ""
                                }
                                onClick={() => {
                                    setOption("company");
                                }}
                            >
                                公司管理
                            </li>
                            <li
                                className={
                                    option === "auditingPosition"
                                        ? style.cur
                                        : ""
                                }
                                onClick={() => {
                                    setOption("auditingPosition");
                                }}
                            >
                                待审核职位
                            </li>
                            <li
                                className={
                                    option === "auditingCompany"
                                        ? style.cur
                                        : ""
                                }
                                onClick={() => {
                                    setOption("auditingCompany");
                                }}
                            >
                                待审核公司
                            </li>
                        </ul>
                    </Sider>
                    <Content>
                        <div className={style.wrap}>
                            <div className={style.content}>
                                <ul className={style.company_list}>
                                    {optionArr}
                                </ul>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
export default App;
