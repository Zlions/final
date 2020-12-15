import Carousels from "@/index/components/Carousels";
import HotCom from "@/index/components/HotCom";
import HotPos from "@/index/components/HotPos";
import MergeCityJob from "@/index/components/MergeCityJob";
import SearchPanel from "@/index/components/SearchPanel";
import React from "react";
import style from './index.scss'

const Index: React.FC = () => {
    const subPos = [];
    for (let i = 0; i < 6; i++) {
        subPos.push(
            <li
                key={i}
                style={{
                    width: "386px",
                    height: "130px",
                }}
            >
                <HotPos />
            </li>
        );
    }

    const subCom = [];
    for (let i = 0; i < 6; i++) {
        subCom.push(
            <li
                key={i}
                style={{
                    width: "284px",
                    height: "238px",
                }}
            >
                <HotCom />
            </li>
        );
    }
    return (
        <div className={style.main}>
            <SearchPanel />
            <Carousels />
            <MergeCityJob showList title="热招职位">
                {subPos}
            </MergeCityJob>
            <MergeCityJob showList={false} title="热门企业">
                {subCom}
            </MergeCityJob>
        </div>
    );
};
export default Index;
