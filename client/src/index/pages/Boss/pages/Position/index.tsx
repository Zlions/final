import api from "@/api";
import React, { useEffect, useState } from "react";
import PositionItem from "../components/PositionItem";
import style from "./index.scss";

const Position: React.FC = () => {


    const [positionList, setPositionList] = useState([] as Array<any>);

    useEffect(() => {
        const cid = localStorage.getItem("curComp");
        api.getPositionByCid(cid as string).then((resp) => {
            let tempList: Array<any> = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                tempList.push(
                    <li key={resp.data.data[i].id}>
                        <PositionItem position={resp.data.data[i]} />
                    </li>
                );
            }
            setPositionList(tempList);
        });
    }, []);

    return (
        <div className={style.container}>
            <div className={style.job_list}>
                <div className={style.job_container}>
                    <div className={style.add_btn}>
                        <a href="/boss/position_detail">发布职位</a>
                    </div>
                    <div className={style.job_list_wrap}>
                        <ul className={style.job_list_content}>
                            {positionList.length === 0 ? '暂无记录' : positionList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Position;
