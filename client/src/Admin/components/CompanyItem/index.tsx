import React from "react";
import style from "./index.scss";
import avatar from "~/assets/comAvatar.jpg";
import api from "@/api";
import { message } from "antd";
import "antd/lib/message/style/index.css";

const CompanyItem = (props: any) => {

    let lis = [];
    for (let i = 0; i < props.options.length; i++) {
        lis.push(<span key={i} onClick={props.options[i].event}>{props.options[i].name}</span>);
    }

    console.log(lis)

    return (
        <div className={style.company_wrap}>
            <div className={style.img_wrap}>
                <div className={style.img_content}>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className={style.company_info}>
                <h3>{props.content.name}</h3>
                <div className={style.info}>
                    {props.content.type.name}
                    <span className="vline"></span>
                    {props.content.scope}
                    <span className="vline"></span>
                    {props.content.finance}
                </div>
                <div className={style.options}>
                    {lis}
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.owner}>
                    所有者：{props.content.owner.name}
                </div>
                <div className={style.addr}>
                    公司地址：
                    {props.content.addr ? props.content.addr : "暂未填写"}
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;
