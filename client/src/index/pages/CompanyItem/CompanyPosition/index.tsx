import api from "@/api";
import HaveSee from "@/index/components/HaveSee";
import PositionItem from "@/index/components/PositionItem";
import React, { useEffect, useState } from "react";
import style from "./index.scss";

const CompanyPosition = (props: any) => {
    const cid = props.match.params.id;
    const [position, setPosition] = useState([] as any);
    useEffect(() => {
        api.getPositionByCid(cid).then((resp) => {
            if (!resp.data.err) {
                let temp: any = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    let curPos = resp.data.data[i];

                    let li = (
                        <li key={curPos.id}>
                            <a href={`/job_item/${curPos.id}`}>
                                <PositionItem pos={curPos} />
                            </a>
                        </li>
                    );
                    temp.push(li);
                }
                setPosition(temp);
            }
        });
    }, []);
    return (
        <>
            <div className={style.job_catagory}>
                <div className={style.wrapper}>
                    <div className={style.job_catagory_label}>职位类型</div>
                    <div className={style.job_catagory_item}>
                        <span className={style.cur}>
                            全部({position.length})
                        </span>
                        {/* <a href="/">技术(6)</a>
                        <a href="/">人事/财务行政(1)</a> */}
                    </div>
                </div>
            </div>
            <div className={style.inner}>
                <div className={style.job_list}>
                    <ul>
                        {position}
                        {/* <li>
                            <a href="/">
                                <PositionItem />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <PositionItem />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <PositionItem />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <PositionItem />
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className={style.slider}>
                    <HaveSee />
                </div>
            </div>
        </>
    );
};
export default CompanyPosition;
