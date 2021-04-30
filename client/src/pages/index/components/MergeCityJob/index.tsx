import React from "react";
import style from "./index.scss";

const MergeCityJob = (props: any) => {
    return (
        <div className={style.merge_city_job}>
            <div className={style.box_title}>{props.title}</div>
            <ul
                style={{
                    display: props.showList ? "flex" : "none",
                }}
                className={style.list}
            >
                <li>IT·互联网</li>
                <li className={style.cur}>金融</li>
                <li>房地产·建筑</li>
                <li>教育培训</li>
                <li>娱乐传媒</li>
                <li>医疗健康</li>
                <li>法律咨询</li>
                <li>供应链·物流</li>
                <li>采购贸易</li>
            </ul>
            <ul className={style.pos}>{props.children}</ul>
        </div>
    );
};

export default MergeCityJob;
