import api from "@/api";
import Carousels from "@/index/components/Carousels";
import HotCom from "@/index/components/HotCom";
import HotPos from "@/index/components/HotPos";
import MergeCityJob from "@/index/components/MergeCityJob";
import SearchPanel from "@/index/components/SearchPanel";
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import style from "./index.scss";
import "antd/lib/notification/style/index.css";

const Index: React.FC = () => {
    useEffect(() => {
        const uid = localStorage.getItem("curUser");
        const btn = (
            <>
                <button
                    className={style.goto}
                    onClick={() => {
                        location.pathname = "/personal";
                    }}
                >
                    跳转...
                </button>
            </>
        );
        if (uid) {
            api.getResumeByUid(uid).then((resp) => {
                if (!resp.data.data) {
                    notification.open({
                        message: "Hint",
                        description: "你尚未填写个人资料，是否进行填写",
                        btn,
                    });
                }
            });
        }
    });

    const [subPos, setsubPos] = useState([] as any[]);

    useEffect(() => {
        api.getAllPositonByCondition({ auditing: false }).then((resp) => {
            if (!resp.data.err) {
                let temp = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    temp.push(
                        <li
                            key={resp.data.data[i].id}
                            style={{
                                width: "386px",
                                height: "130px",
                            }}
                        >
                            <HotPos pos={resp.data.data[i]} />
                        </li>
                    );
                }
                setsubPos(temp);
            }
        });
    }, []);

    const [subCom, setSubCom] = useState([] as any[]);

    useEffect(() => {
        api.getAllCompanyByCondition({ auditing: false }).then((resp) => {
            if (!resp.data.err) {
                let temp = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    temp.push(
                        <li
                            key={resp.data.data[i].id}
                            style={{
                                width: "284px",
                                height: "238px",
                            }}
                        >
                            <HotCom com={resp.data.data[i]} />
                        </li>
                    );
                }
                setSubCom(temp);
            }
        });
    }, []);
    return (
        <div className={style.main}>
            <SearchPanel />
            <Carousels />
            <MergeCityJob showList={subPos.length !== 0} title="热招职位">
                {subPos.length === 0 ? "暂无数据" : subPos}
            </MergeCityJob>
            <MergeCityJob showList={false} title="热门企业">
                {subCom.length === 0 ? "暂无数据" : subCom}
            </MergeCityJob>
        </div>
    );
};
export default Index;
