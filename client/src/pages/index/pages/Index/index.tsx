import api from "@/api";
import Carousels from "@/pages/index/components/Carousels";
import HotCom from "@/pages/index/components/HotCom";
import HotPos from "@/pages/index/components/HotPos";
import MergeCityJob from "@/pages/index/components/MergeCityJob";
import SearchPanel from "@/pages/index/components/SearchPanel";
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import style from "./index.scss";
import "antd/lib/notification/style/index.css";
import { ICompany, IPosition } from "@/types";
import { store } from "@/store";
import { addLoginUser } from "@/store/actions/login";

const Index: React.FC = () => {
    console.log(store.getState());
    store.dispatch(addLoginUser());
    console.log(store.getState());
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
                } else {
                }
            });
        }
    }, []);

    const [subPos, setsubPos] = useState([] as any[]);

    useEffect(() => {
        api.getAllPositonByCondition({ auditing: false }).then((resp) => {
            if (!resp.data.err) {
                let temp = resp.data.data.map((it: IPosition) => (
                    <li
                        key={it.id}
                        style={{
                            width: "386px",
                            height: "130px",
                        }}
                    >
                        <HotPos pos={it} />
                    </li>
                ));
                setsubPos(temp);
            }
        });
    }, []);

    const [subCom, setSubCom] = useState([] as any[]);

    useEffect(() => {
        api.getAllCompanyByCondition({ auditing: false }).then((resp) => {
            if (!resp.data.err) {
                let temp = resp.data.data.map((it: ICompany) => (
                    <li
                        key={it.id}
                        style={{
                            width: "284px",
                            height: "238px",
                        }}
                    >
                        <HotCom com={it} />
                    </li>
                ));
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
