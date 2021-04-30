import React, { useState } from "react";
import style from "./index.scss";
import comAvatar from "~/assets/comAvatar.jpg";
import api from "@/api";

const HotCom = (props: any) => {
    const [cnt, setCnt] = useState(0)
    api.getPositionByCid(props.com.id).then(resp => {
        setCnt(resp.data.data.length);
    })
    return (
        <div className={style.sub_li}>
            <a
                href={`/company_item/${props.com.id}`}
                className={style.company_info}
            >
                <div className={style.img_box}>
                    <img src={comAvatar} alt="" />
                </div>
                <div className={style.company_text}>
                    <h4>{props.com.name}</h4>
                    <p>
                    {props.com.finance}
                        <span className="vline"></span>
                        {props.com.type.name}
                    </p>
                </div>
            </a>
            <a href="/" className={style.about_info}>
                <p>
                    <span className={style.text_blue}>{cnt}</span>个热招职位
                </p>
            </a>
        </div>
    );
};

export default HotCom;
