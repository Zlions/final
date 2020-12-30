import React from "react";
import style from "./index.scss";
import icon from "../../../iconfont.scss";
import comAvatar from '~/assets/comAvatar.jpg';

const HotPos = (props: any) => {
    return (
        <div className={style.sub_li}>
            <a href={`/job_item/${props.pos.id}`} className={style.job_info}>
                <div className={style.sub_li_top}>
                    <p className={style.name}>{props.pos.name}</p>
                    <i className={`${icon.iconfont} ${style.chat}`}>&#xe656;</i>
                    <p className={style.salary}>{props.pos.finance}</p>
                </div>
                <p className={style.job_text}>
                    {props.pos.city}
                    <span className="vline"></span>
                    {props.pos.experience}
                    <span className="vline"></span>
                    {props.pos.education}
                </p>
            </a>
            <div className={style.sub_li_bottom}>
                <a href="/" className={style.user_info}>
                    <img
                        src={comAvatar}
                        alt=""
                    />
                </a>
                <a href="/" className={style.company_info}>
                    <span className={style.com_name}>{props.pos.belongTo.name}</span>
                    <span className={style.type}>{props.pos.belongTo.type.name}</span>
                    <span className="vline"></span>
                    <span className={style.financing}>{props.pos.belongTo.finance}</span>
                </a>
            </div>
        </div>
    );
};

export default HotPos;
