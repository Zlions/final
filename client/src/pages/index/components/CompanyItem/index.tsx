import React, { useEffect, useState } from "react";
import style from "./index.scss";
import comAvatar from "~/assets/comAvatar.jpg";
import api from "@/api";
import { ICompany } from "@/types";

interface IProps {
    com: ICompany
}

const Company = (props: IProps) => {
    const cid = props.com.id;

    const [posCnt, setPosCnt] = useState(0);

    useEffect(() => {
        api.getPositionByCid(cid).then((resp) => {
            setPosCnt(resp.data.data.length);
        });
    }, []);

    return (
        <div className={style.sub_li}>
            <a href={`/company_item/${props.com.id}`} className={style.company_info}>
                <img src={comAvatar} alt="" />
                <div className={style.company_text}>
                    <h4>{props.com.name}</h4>
                    <p>
                        {props.com.finance}
                        <span className="vline"></span>
                        {/* {props.com.type.name} */}
                    </p>
                </div>
            </a>
            <a href="/" className={style.about_info}>
                <p>
                    发布
                    <span className={style.h}>{posCnt}</span>
                    个职位
                </p>
            </a>
        </div>
    );
};

export default Company;
