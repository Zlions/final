import HaveSee from '@/pages/components/HaveSee';
import PositionItem from '@/pages/components/PositionItem';
import React from "react";
import style from "./index.scss";

const CompanySummarize: React.FC = props => {
    return (
        <>
            <div className={style.job_catagory}>
                <div className={style.wrapper}>
                    <div className={style.job_catagory_label}>职位类型</div>
                    <div className={style.job_catagory_item}>
                        <a href="/" className={style.cur}>
                            全部(7)
                        </a>
                        <a href="/">技术(6)</a>
                        <a href="/">人事/财务行政(1)</a>
                    </div>
                </div>
            </div>
            <div className={style.inner}>
                <div className={style.job_list}>
                    <ul>
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
                        </li>
                        <li>
                            <a href="/">
                                <PositionItem />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.slider}>
                    <HaveSee />
                </div>
            </div>
        </>
    );
};
export default CompanySummarize;
