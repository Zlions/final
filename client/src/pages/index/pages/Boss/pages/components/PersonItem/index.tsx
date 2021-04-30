import React from "react";
import style from "./index.scss";
import avatar from "~/assets/avatar.jpg";

const personItem = (props: any) => {

    return (
        <>
            <div className={style.person_item}>
                <img src={avatar} alt="" />
                <div className={style.name}>{props.per.name}</div>
                <div className={style.lianxi}>
                    <div className={style.phone}>手机号：{props.per.phone}</div>
                    <div className={style.email}>邮箱：{props.per.email}</div>
                </div>
                <div className={style.checkout}>点击查看简历</div>
                <div className={style.options}>
                    <span>通过</span>
                    <span>拒绝</span>
                </div>
            </div>
            <div className={style.mask}>
                
            </div>
        </>
    );
};

export default personItem;
