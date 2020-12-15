import CityMenu from "@/index/components/CityMenu";
import FilterSelect from "@/index/components/FilterSelect";
import HaveSee from "@/index/components/HaveSee";
import JobPrimary from "@/index/components/JobPrimary";
import SearchPanel from "@/index/components/SearchPanel";
import { Pagination } from "antd";
import "antd/lib/pagination/style/index.css";
import React from "react";
import style from "./index.scss";

const Test: React.FC = () => {
    return (
        <>
            <div className={style.filter_box}>
                <div className={style.home_inner}>
                    <SearchPanel left />
                    <CityMenu />
                    <FilterSelect />
                </div>
            </div>
            <div className={style.job_box}>
                <div className={style.job_list}>
                    <ul className={style.job_tab}>
                        <li>
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
                        </li>
                    </ul>
                </div>
                <HaveSee />
            </div>
            <div className={style.page}>
                <Pagination
                    className={`${style.page_panel} pagination_panel`}
                    pageSize={2}
                    defaultCurrent={1}
                    total={2}
                />
            </div>
        </>
    );
};

export default Test;
