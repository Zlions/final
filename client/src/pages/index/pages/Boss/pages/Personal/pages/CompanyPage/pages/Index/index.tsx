import React, { useEffect, useState } from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import Selected from "@/pages/index/components/Selected";
import api from "@/api";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import { ICompany } from "@/types";

const Base: React.FC = () => {
    const comp: ICompany = {
        id: "",
        name: "",
        type: {
            name: "",
            id: "",
        },
        addr: "",
        scope: "",
        finance: "",
        describe: "",
        createdAt: "",
    };
    const [company, setCompany] = useState(comp);

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
        <div className={style.base_info}>
            <h4>公司基本信息</h4>
            <div className={style.sub_title}>
                丰富的公司介绍，能获得更多求职者的青睐，为你的职位带来更多查看与沟通
            </div>
            {/* <div className={style.form_item}>
                <div className={style.item_label}>公司logo：</div>
                <div className={style.item_content}>
                    <div className={style.upd_box}>
                        <div className={style.logo_box}>
                            <i className={icon.iconfont}>&#xe6a7;</i>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={style.form_item}>
                <div className={style.item_label}>公司名称：</div>
                <div className={style.item_content}>
                    <div className={`${style.ipt_wrap}`}>
                        <input
                            type="text"
                            value={company.name}
                            disabled
                            className={style.disabled}
                            placeholder="请填写公司名称"
                        />
                    </div>
                </div>
            </div>
            <div className={style.form_item}>
                <div className={style.item_label}>所在行业：</div>
                <div className={style.item_content}>
                    <div className={`${style.ipt_wrap}`}>
                        <input
                            type="text"
                            value={company.type.name}
                            disabled
                            className={style.disabled}
                            placeholder="请填写所在行业"
                        />
                    </div>
                </div>
            </div>
            <div className={style.form_item}>
                <div className={style.item_label}>公司地址：</div>
                <div className={style.item_content}>
                    <div className={`${style.ipt_wrap}`}>
                        <input
                            value={company.addr}
                            onChange={(e) => {
                                setCompany({
                                    ...company,
                                    addr: e.target.value,
                                });
                            }}
                            type="text"
                            placeholder="请填写公司地址"
                        />
                    </div>
                </div>
            </div>
            <div className={style.form_item}>
                <div className={style.item_label}>融资阶段：</div>
                <div className={style.item_content}>
                    <Selected
                        inputValue={company.finance}
                        choose={(finance: string) => {
                            setCompany({ ...company, finance });
                        }}
                        styleSheet={{ width: 300, menuDisplay: false }}
                        inputPlaceholder="请选择"
                        direction="top"
                        selectMenu={[
                            "不限",
                            "天使轮",
                            "A轮",
                            "B轮",
                            "C轮",
                            "D轮及以上",
                        ]}
                    />
                </div>
            </div>
            <div className={style.form_item}>
                <div className={style.item_label}>人员规模：</div>
                <div className={style.item_content}>
                    <Selected
                        inputValue={company.scope}
                        choose={(scope: string) => {
                            setCompany({ ...company, scope });
                        }}
                        styleSheet={{ width: 300, menuDisplay: true }}
                        inputPlaceholder="请选择"
                        direction="top"
                        selectMenu={[
                            "0-20人",
                            "20-99人",
                            "100-499人",
                            "500-999人",
                            "1000-10000人",
                        ]}
                    />
                </div>
            </div>
            <div className={style.form_btns}>
                <button className={style.btn} onClick={handleClick}>
                    保存
                </button>
            </div>
        </div>
    );
};

export default Base;
