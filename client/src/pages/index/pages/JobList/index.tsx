import api from "@/api";
import CityMenu from "@/pages/index/components/CityMenu";
import FilterSelect from "@/pages/index/components/FilterSelect";
import HaveSee from "@/pages/index/components/HaveSee";
import JobPrimary from "@/pages/index/components/JobPrimary";
import SearchPanel from "@/pages/index/components/SearchPanel";
import { store } from "@/store";
import { IPosition } from "@/types";
import { Pagination } from "antd";
import "antd/lib/pagination/style/index.css";
import React, { useEffect, useState } from "react";
import style from "./index.scss";

const Test: React.FC = (props: any) => {
    const [subPos, setsubPos] = useState([] as any[]);
    const [sourceData, setSourceData] = useState([]);
    const [inputValue, setInputValue] = useState('')  

    // 获取审核通过的所有职位
    useEffect(() => {
        api.getAllPositonByCondition({ auditing: false }).then((resp) => {
            console.log(resp)
            if (!resp.data.err) {
                let temp = resp.data.data.map((it: IPosition, i: number) => (
                    <li
                        key={i}
                        onClick={() => {
                            const w = window.open(
                                `${location.origin}/job_item/${resp.data.data[i].id}`
                            ) as Window;
                        }}
                    >
                        <JobPrimary pos={resp.data.data[i]} />
                    </li>
                ));
                setsubPos(temp);
                setSourceData(resp.data.data);
            }
        });
    }, []);

    const clickEvent = (inputValue: string, type: string) => {
        console.log('clickEvent', sourceData)
        let temp:any = [];
        temp = sourceData.map((item: any, i: number) => {
            console.log('item', item[type])
            if (
                item[type] === inputValue ||
                item[type].indexOf(inputValue) != -1
            ) {
                return (
                    <li
                        key={i}
                        onClick={() => {
                            const w = window.open(
                                `${location.origin}/job_item/${item.id}`
                            ) as Window;
                        }}
                    >
                        <JobPrimary pos={item} />
                    </li>
                
                );
            }
        });
        setsubPos(temp)
    };

    return (
        <>
            <div className={style.filter_box}>
                <div className={style.home_inner}>
                    <SearchPanel left searchEvent={clickEvent} props={...props} />
                    {/* <CityMenu /> */}
                    <FilterSelect />
                </div>
            </div>
            <div className={style.job_box}>
                <div className={style.job_list}>
                    <ul className={style.job_tab}>
                        {subPos}
                        {/* {<li>
                            <JobPrimary />
                        </li>
                        <li>
                            <JobPrimary />
                        </li>
                        <li>
                            <JobPrimary />
                        </li>
                        <li>
                            <JobPrimary />
                        </li>} */}
                    </ul>
                </div>
                <HaveSee />
            </div>
            {/* <div className={style.page}>
                <Pagination
                    className={`${style.page_panel} pagination_panel`}
                    pageSize={2}
                    defaultCurrent={1}
                    total={2}
                />
            </div> */}
        </>
    );
};

export default Test;
