import api from "@/api";
import { IPosition } from "@/types";
import React, { useEffect, useState } from "react";
import SendResumeItem from "../components/SendResumeItem";
import style from "./index.scss";

const SendResume = () => {

    const cid = localStorage.getItem('curComp');

    const [position, setPosition] = useState([] as any)

    useEffect(() => {
        api.getPositionByCid(cid as string).then(resp => {
            if(!resp.data.err) {
                let temp = resp.data.data.map((it: IPosition) => <SendResumeItem key={it.id} pos={it} />);
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
