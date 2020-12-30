import React, { useEffect, useState } from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";
import JobSec from "@/index/components/JobSec";
import PromotionJobItem from "@/index/components/PromotionJobItem";
import api from "@/api";
import { message } from "antd";
import "antd/lib/message/style/index.css";
import comAvatar from "~/assets/comAvatar.jpg";
import avatar from "~/assets/avatar.jpg";

const JobDetail = (props: any) => {
    const pid = props.match.params.id;
    const [curPos, setCurPos] = useState({
        name: '',
        addr: '',
        city: '',
        finance: '',
        experience: '',
        education: '',
        describe: '',
        belongTo: {
            describe: '',
            id: '',
            addr: '',
            name: '',
            finance: '',
            scope: '',
            createdAt: '',
            type: {
                name: ''
            }
        }
    });
    useEffect(() => {
        api.getPositionById(pid).then((resp) => {
            if (!resp.data.data || resp.data.err) {
                message.error("暂无该职位信息");
                setTimeout(() => {
                    location.pathname = "/";
                }, 500);
            } else {
                console.log('11111')
                console.log(resp.data.data)
                setCurPos(resp.data.data);
            }
        });
    }, []);


    function deliverResume() {
        const uid = localStorage.getItem('curUser');
        api.saveSendRecord({
            positionId: pid,
            userId: uid
        }).then(resp => {
            if(!resp.data.err) {
                message.success('投递成功');
                return;
            } else {
                message.error(resp.data.err);
                return;
            }
        })

    }

    return (
        <>
            <div className={style.job_banner}>
                <div className={style.job_primary}>
                    <div className={style.info_primary}>
                        <div className={style.job_status}>
                            <span>招聘中</span>
                        </div>
                        <div className={style.name}>
                            <h1>{curPos.name}</h1>
                            <span className={style.salary}>
                                {curPos.finance}
                            </span>
                        </div>
                        <p>
                            {curPos.city}
                            <span className="dolt"></span>
                            {curPos.experience}
                            <span className="dolt"></span>
                            {curPos.education}
                        </p>
                        <div className={style.tag_container}>
                            <div className={style.job_tags}>
                                <span>全勤奖</span>
                                <span>年终奖</span>
                                <span>带薪年假</span>
                                <span>员工旅游</span>
                                <span>节日福利</span>
                                <span>零食下午茶</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.job_op}>
                        <div className={style.btn_container}>
                            <span onClick={deliverResume}>立即投递</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.job_box}>
                <div className={style.home_inner}>
                    <div className={style.job_detail}>
                        <div className={style.detail_op}>
                            <div className={style.btns}>
                                <i className={icon.iconfont}>&#xe6d4;</i>
                                <span>举报</span>
                            </div>
                            <div className={style.figure}>
                                <img src={avatar} alt="" />
                            </div>
                            <h2 className={style.name}>江女士</h2>
                            <p className={style.gray}>
                                HR
                                <span className="dolt"></span>
                                刚刚在线
                            </p>
                        </div>
                        <div className={style.detail_content}>
                            <JobSec
                                title="职位描述"
                                text={`职位描述：
                                    ${
                                        curPos.describe
                                            ? curPos.describe
                                            : "暂无描述"
                                    }
                                    `}
                            />

                            <JobSec
                                title="公司介绍"
                                text={`${
                                    curPos.belongTo.describe
                                        ? curPos.belongTo.describe
                                        : "暂无描述"
                                }
                                    `}
                            />

                            <JobSec
                                title="工作地点"
                                text={`${
                                    curPos.belongTo.addr
                                        ? curPos.belongTo.addr
                                        : "暂无地址"
                                }`}
                            />
                        </div>
                    </div>
                    <div className={style.job_slider}>
                        <div className={style.slider_company}>
                            <p className={style.title}>公司基本信息</p>
                            <div className={style.company_info}>
                                <a href={`/company_item/${curPos.belongTo.id}`}>
                                    <img src={comAvatar} alt="" />
                                </a>
                                <a href={`/company_item/${curPos.belongTo.id}`}>{curPos.belongTo.name}</a>
                            </div>
                            <p>
                                <i className={icon.iconfont}>&#xe613;</i>
                                {curPos.belongTo.finance}
                            </p>
                            <p>
                                <i className={icon.iconfont}>&#xe619;</i>
                                {curPos.belongTo.scope}
                            </p>
                            <p>
                                <i className={icon.iconfont}>&#xe64b;</i>
                                {curPos.belongTo.type.name}
                            </p>
                            <p className={style.gray}>更新于：{new Date(curPos.belongTo.createdAt).toLocaleDateString().replace(/\//g, '-')}</p>
                        </div>
                        {/* <div className={style.promotion_job}>
                            <h3>
                                相似职位
                                <a href="/">
                                    更多相似职位
                                    <i className={icon.iconfont}>&#xe601;</i>
                                </a>
                            </h3>
                            <ul>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                                <li>
                                    <PromotionJobItem />
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default JobDetail;
