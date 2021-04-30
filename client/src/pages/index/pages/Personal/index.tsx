import api from "@/api";
import Selected from "@/pages/index/components/Selected";
import React, { useEffect, useState } from "react";
import style from "./index.scss";
import "antd/lib/notification/style/index.css";
import { message, notification } from "antd";
import "antd/lib/message/style/index.css";
import { IResume } from "@/types";

const Personal: React.FC = () => {
    const resume: IResume = {
        name: "",
        sex: true,
        phone: "",
        email: "",
        major: "",
        school: "",
        birth: "",
        wechat: "",
        jobState: "",
        wantedJob: "",
        eduYear: "",
        godness: "",
    };
    const [userResume, setUserResume] = useState(resume);
    // 获取当前登录用户
    const curUser = localStorage.getItem("curUser");
    if (!curUser) {
        notification.open({
            message: "Error",
            description: "你尚未登录，无权限访问该页面。",
        });
        return <div></div>;
    }

    useEffect(() => {
        api.getResumeByUid(curUser).then((resp) => {
            if (resp.data.data.length) {
                setUserResume(resp.data.data[0]);
            }
        });
    }, []);

    function onSubmit() {
        // 检查必填项
        if (
            !userResume.name ||
            !userResume.jobState ||
            !userResume.sex ||
            !userResume.birth ||
            !userResume.phone ||
            !userResume.email
        ) {
            message.error("有必填选项尚未填写");
            return;
        }
        api.saveResume({ ...userResume, belongTo: curUser }).then((resp) => {
            if (!resp.data.data.err) {
                message.success("填写成功");
            } else {
                message.error(resp.data.err);
            }
        });
    }

    return (
        <div className={style.main}>
            <div className={style.resume_content}>
                <div className={style.update_time}>
                    最后更新 2020.12.08 16:36{" "}
                </div>
                <div className={style.resume_box}>
                    <div className={style.userinfo}>
                        <div className={style.item_form}>
                            <h3 className={style.title}>编辑个人信息</h3>
                            <div className={style.form}>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        姓名{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={style.ipt_wrap}>
                                            <input
                                                type="text"
                                                value={userResume.name}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        name: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        当前求职状态{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <Selected
                                            inputValue={userResume.jobState}
                                            styleSheet={{
                                                width: 280,
                                                menuDisplay: false,
                                            }}
                                            choose={(jobState: string) => {
                                                setUserResume({
                                                    ...userResume,
                                                    jobState,
                                                });
                                            }}
                                            inputPlaceholder="请选择"
                                            selectMenu={[
                                                "离校-随时到岗",
                                                "在校-暂不考虑",
                                                "在校-月内到岗",
                                                "在校-考虑机会",
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        性别{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <Selected
                                            inputValue={
                                                userResume.sex ? "男" : "女"
                                            }
                                            styleSheet={{
                                                width: 280,
                                                menuDisplay: false,
                                            }}
                                            choose={(sex: string) => {
                                                setUserResume({
                                                    ...userResume,
                                                    sex:
                                                        sex === "男"
                                                            ? true
                                                            : false,
                                                });
                                            }}
                                            inputPlaceholder="请选择"
                                            selectMenu={["男", "女"]}
                                        />
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        生日{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.birth}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        birth: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        微信号
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.wechat}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        wechat: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        电话{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.phone}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        phone: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        邮箱{" *"}
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.email}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        email: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        意向职位
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.wantedJob}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        wantedJob:
                                                            e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        毕业院校
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.school}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        school: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        毕业年份
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.eduYear}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        eduYear: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_item}>
                                    <div className={style.item_label}>
                                        所学专业
                                    </div>
                                    <div className={style.item_content}>
                                        <div className={`${style.ipt_wrap}`}>
                                            <input
                                                value={userResume.major}
                                                onChange={(e) => {
                                                    setUserResume({
                                                        ...userResume,
                                                        major: e.target.value,
                                                    });
                                                }}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.form_btns}>
                                    <button onClick={onSubmit}>完成</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.summary}>
                        <div className={style.item_primary}>
                            <h3 className={style.title}>个人优势</h3>
                            <ul>
                                <li>
                                    <textarea
                                        placeholder="请填写"
                                        value={userResume.godness}
                                        onChange={(e) => {
                                            setUserResume({
                                                ...userResume,
                                                godness: e.target.value,
                                            });
                                        }}
                                    ></textarea>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
