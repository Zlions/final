import Selected from "@/pages/index/components/Selected";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import "antd/lib/message/style/index.css";
import style from "./index.scss";
import api from "@/api";
import { Prompt, withRouter } from "react-router";

const PositionDetail = (props: any) => {
    const [position, setPosition] = useState({
        name: "",
        addr: "",
        city: "",
        experience: "",
        finance: "",
        education: "",
        describe: "",
        auditing: false,
    });

    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("updatePositionId")) {
            api.getPositionById(
                localStorage.getItem("updatePositionId") as string
            ).then((resp) => {
                if (resp.data.data) {
                    setIsUpdate(true);
                    setPosition(resp.data.data);
                }
            });
        }
    }, []);

    function handleClick() {
        if (
            !position.name ||
            !position.city ||
            !position.addr ||
            !position.experience ||
            !position.finance ||
            !position.education
        ) {
            message.error("有必填项未填写");
            return;
        }

        const comId = localStorage.getItem("curComp");

        if (!isUpdate) {
            api.savePosition({ ...position, belongTo: comId }).then((resp) => {
                if (!resp.data.err) {
                    message.success("职位已发布，请等待审核", 1);
                    setTimeout(() => {
                        location.pathname = "/boss/";
                    }, 1000);
                    return;
                }
                message.error(resp.data.err);
                return;
            });
        } else {
            api.updatePosition(position).then(resp => {
                if(!resp.data.err) {
                    message.success('修改成功，即将跳转页面', 1);
                    localStorage.removeItem("updatePositionId");
                    setTimeout(() => {
                        location.pathname = '/boss/'
                    }, 1000);
                }
            })
        }
    }


    return (
        <div className={style.job_manage}>
            <div className={style.job_edit}>
                <div className={style.job_container}>
                    <h3 className={style.title_container}>职位基本信息</h3>
                    <div className={style.form_row}>
                        <div className={style.title}>职位名称{" *"}：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    value={position.name}
                                    onChange={(e) => {
                                        setPosition({
                                            ...position,
                                            name: e.target.value,
                                        });
                                    }}
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入职位名称"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>工作城市{" *"}：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    value={position.city}
                                    onChange={(e) => {
                                        setPosition({
                                            ...position,
                                            city: e.target.value,
                                        });
                                    }}
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入工作城市"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>工作地点{" *"}：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    value={position.addr}
                                    onChange={(e) => {
                                        setPosition({
                                            ...position,
                                            addr: e.target.value,
                                        });
                                    }}
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入工作地点"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.job_container}>
                    <h3 className={style.title_container}>职位要求</h3>
                    <div className={style.form_row}>
                        <div className={style.title}>经验要求{" *"}：</div>
                        <div className={style.content}>
                            <Selected
                                inputValue={position.experience}
                                choose={(experience: string) => {
                                    setPosition({ ...position, experience });
                                }}
                                inputPlaceholder="请输入"
                                styleSheet={{ width: 474, menuDisplay: false }}
                                selectMenu={[
                                    "不限",
                                    "1年以内",
                                    "1-3年",
                                    "3-5年",
                                    "5-10年",
                                ]}
                            />
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>学历要求{" *"}：</div>
                        <div className={style.content}>
                            <Selected
                                inputValue={position.education}
                                choose={(education: string) => {
                                    setPosition({ ...position, education });
                                }}
                                inputPlaceholder="请输入"
                                styleSheet={{ width: 474, menuDisplay: false }}
                                selectMenu={[
                                    "不限",
                                    "初中及以下",
                                    "中专/中技",
                                    "高中",
                                    "大专",
                                    "本科",
                                    "硕士",
                                    "博士",
                                ]}
                            />
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>薪资详情{" *"}：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    value={position.finance}
                                    onChange={(e) => {
                                        setPosition({
                                            ...position,
                                            finance: e.target.value,
                                        });
                                    }}
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入薪资详情"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>职位描述：</div>
                        <div className={style.content}>
                            <div className={style.textarea_wrap}>
                                <textarea
                                    value={position.describe}
                                    onChange={(e) => {
                                        setPosition({
                                            ...position,
                                            describe: e.target.value,
                                        });
                                    }}
                                    placeholder="1.工作内容
2.任职需求
3.特别说明"
                                ></textarea>
                                <span className={style.count_num}>
                                    <span>{position.describe.length}</span>
                                    /5000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.form_btn}>
                    <div className={style.btns}>
                        <button onClick={handleClick}>保存并发布</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PositionDetail);
