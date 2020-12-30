import api from "@/api";
import { message } from "antd";
import React, { ReactNode } from "react";
import { withRouter } from "react-router";
import style from "./index.scss";


const PositionItem = (props: any) => {
    return (
        <>
            <div className={style.info_container}>
                <div
                    className={`${style.job_title} ${
                        props.position.auditing ? style.auditing : ""
                    }`}
                >
                    {props.position.name}
                    <span>{props.position.auditing ? "待审核" : ""}</span>
                </div>
                <div className={style.info_labels}>
                    {props.position.city}
                    <span className="vline"></span>
                    {props.position.experience}
                    <span className="vline"></span>
                    {props.position.education}
                    <span className="vline"></span>
                    {props.position.finance}
                </div>
            </div>
            <div className={style.date_container}>
                <span>
                    {new Date(props.position.createdAt)
                        .toLocaleDateString()
                        .replace(/\//g, "-")}
                </span>
            </div>
            <div className={style.option_container}>
                <a
                    href="/boss/position_detail"
                    onClick={(e) => {
                        e.preventDefault();
                        localStorage.setItem(
                            "updatePositionId",
                            props.position.id
                        );
                        location.pathname = "/boss/position_detail";
                    }}
                >
                    编辑
                </a>
                <a href="/" onClick={e => {
                    e.preventDefault();
                    api.deletePositionById(props.position.id).then(resp => {
                        if(!resp.data.err) {
                            location.pathname = '/boss/'
                        } else {
                            message.error(resp.data.err);
                        }
                    })
                }} >删除</a>
            </div>
        </>
    );
};
export default withRouter(PositionItem);
