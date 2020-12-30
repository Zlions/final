import api from "@/api";
import React, { useEffect, useState } from "react";
import SendResumeItem from "../components/SendResumeItem";
import style from "./index.scss";

const SendResume = () => {

    const cid = localStorage.getItem('curComp');

    const [position, setPosition] = useState([] as any)

    useEffect(() => {
        api.getPositionByCid(cid as string).then(resp => {
            if(!resp.data.err) {
                let temp = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    temp.push(<SendResumeItem key={i} pos={resp.data.data[i]} />);
                }
                setPosition(temp)
            }
        })
    }, [])

    return (
        <div className={style.wrap}>
            {position}
        </div>
    );
};
export default SendResume;
