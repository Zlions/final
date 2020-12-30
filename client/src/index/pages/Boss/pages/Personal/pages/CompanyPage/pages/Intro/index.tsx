import api from "@/api";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import style from "./index.scss";

const Intro: React.FC = () => {
    const [company, setCompany] = useState({
        id: "",
        name: "",
        type: Object,
        addr: "",
        scope: "",
        finance: "",
        describe: "",
    });

    useEffect(() => {
        api.getCompanyById(localStorage.getItem("curComp") as string).then(
            (resp) => {
                setCompany({ ...resp.data.data });
            }
        );
    }, []);

    function handleClick() {
        api.updateCompany(company).then((resp) => {
            if (!resp.data.err) {
                message.success("保存成功");
            }
        });
    }
    return (
        <div className={style.intro}>
            <h4>公司介绍</h4>
            <div className={style.sub_title}>
                可以简单介绍一下公司发展状况、服务领域、主要产品等信息
            </div>
            <div className={style.textarea_box}>
                <textarea
                    value={company.describe}
                    onChange={(e) => {
                        setCompany({ ...company, describe: e.target.value });
                    }}
                ></textarea>
                <span className={style.counter}>
                    <span>{company.describe.length}</span>/1000
                </span>
            </div>
            <button className={style.save_btn} onClick={handleClick}>
                保存
            </button>
        </div>
    );
};

export default Intro;
