import React from "react";
import CityMenu from "../components/CityMenu";
import FilterSelect from "../components/FilterSelect";
import HaveSee from '../components/HaveSee';
import JobPrimary from "../components/JobPrimary";
import SearchPanel from "../components/searchPanel";
import style from "./index.scss";

export default function jobList() {
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
        </>
    );
}
