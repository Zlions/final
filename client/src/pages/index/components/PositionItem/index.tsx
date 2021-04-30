import React from "react";
import style from "./index.scss";
import avatar from "~/assets/avatar.jpg";
import { IPosition } from "@/types";

interface IProps {
    pos: IPosition
}
const PositionItem = (props: IProps) => {
    return (
        <div className={style.job_primary}>
            <div className={style.info_primary}>
                <h3 className={style.name}>
                    <div className={style.title_box}>
                        <span className={style.job_title}>
                            {props.pos.name}
                        </span>
                        <span className={style.job_area}>
                            [{props.pos.city}]
                        </span>
                    </div>
                </h3>
                <p>
                    <span className={style.red}>{props.pos.finance}</span>
                    {props.pos.experience}
                    <span className="vline"></span>
                    {props.pos.education}
                </p>
            </div>
            <div className={style.info_publis}>
                <h3 className={style.pub_name}>
                    <img src={avatar} alt="" />
                    hr1
                    <span className="vline"></span>
                    HR
                </h3>
            </div>
        </div>
    );
};
export default PositionItem;
