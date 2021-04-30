import style from "./index.scss";
import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import CompanySummarize from "./CompanySummarize";
import CompanyPosition from "./CompanyPosition";
import api from "@/api";

const CompanyItem = (props: any) => {
    const cid = props.match.params.id;
    const [curCom, setCurCom] = useState({
        describe: "",
        id: "",
        addr: "",
        name: "",
        finance: "",
        scope: "",
        createdAt: "",
        type: {
            name: "",
        },
    });

    const [positionCnt, setPositionCnt] = useState(0)

    // 多少在招职位
    useEffect(() => {
        api.getPositionByCid(cid).then(resp => {
            if(!resp.data.err) {
                setPositionCnt(resp.data.data.length);
            }
        })
    }, [])

    useEffect(() => {
        api.getCompanyById(cid).then(resp => {
            if(!resp.data.err) {
                setCurCom(resp.data.data)
            }
        })
    }, [])
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
                                <h1 className={style.name}>{curCom.name}</h1>
                                <p>
                                {curCom.finance}
                                    <span className="dolt"></span>
                                    {curCom.scope}
                                    <span className="dolt"></span>
                                    {curCom.type.name}
                                </p>
                            </div>
                        </div>
                        <div className={style.company_start}>
                            <span>
                                <b>{positionCnt}</b>
                                在招职位
                            </span>
                            {/* <span className={style.pad}>
                                <b>2</b>
                                位BOSS
                            </span> */}
                        </div>
                    </div>
                    <div className={style.company_tab}>
                        <a
                        href={`/company_item/${curCom.id}/`}
                            className={
                                location.pathname === `/company_item/${curCom.id}/`
                                    ? style.cur
                                    : ""
                            }
                        >
                            公司简介
                        </a>
                        <a
                            href={`/company_item/${cid}/islooking`}
                            className={
                                location.pathname === `/company_item/${cid}/islooking`
                                    ? style.cur
                                    : ""
                            }
                        >
                            招聘职位({positionCnt})
                        </a>
                    </div>
                </div>
            </div>
            <Route
                path={`/company_item/:id/islooking`}
                exact
                component={CompanyPosition}
            ></Route>
            <Route
                path={`/company_item/:id/`}
                exact
                component={CompanySummarize}
            ></Route>
        </>
    );
};

export default CompanyItem;
