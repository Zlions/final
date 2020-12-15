import style from "./index.scss";
import React from "react";
import { Route } from "react-router";
import CompanySummarize from "./CompanySummarize";
import CompanyPosition from "./CompanyPosition";

const CompanyItem: React.FC = props => {
    return (
        <>
            <div className={style.company_banner}>
                <div className={style.home_inner}>
                    <div className={style.inner_wrapper}>
                        <div className={style.info_primary}>
                            <img
                                src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/b841e7655fb1f472005a543d52200789cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0"
                                alt=""
                            />
                            <div className={style.info}>
                                <h1 className={style.name}>夕阳游戏</h1>
                                <p>
                                    天使轮
                                    <span className="dolt"></span>
                                    0-20人
                                    <span className="dolt"></span>
                                    游戏
                                </p>
                            </div>
                        </div>
                        <div className={style.company_start}>
                            <span>
                                <b>4</b>
                                在招职位
                            </span>
                            <span className={style.pad}>
                                <b>2</b>
                                位BOSS
                            </span>
                        </div>
                    </div>
                    <div className={style.company_tab}>
                        <a href="/company_item/" className={location.pathname === '/company_item/' ? style.cur : ''}>
                            公司简介
                        </a>
                        <a href="/company_item/islooking" className={location.pathname === '/company_item/islooking' ? style.cur : ''}>招聘职位(4)</a>
                    </div>
                </div>
            </div>
            <Route path="/company_item/islooking" exact component={CompanyPosition}></Route>
            <Route path="/company_item/" exact component={CompanySummarize}></Route>
        </>
    );
};

export default CompanyItem;
