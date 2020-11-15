import React from "react";
import style from "./index.scss";
import icon from "../../iconfont.scss";
import PromotionJobItem from "../components/PromotionJobItem";
import JobSec from "../components/JobSec";

const Item = () => {
    return (
        <>
            <div className={style.job_banner}>
                <div className={style.job_primary}>
                    <div className={style.info_primary}>
                        <div className={style.job_status}>
                            <span>招聘中</span>
                        </div>
                        <div className={style.name}>
                            <h1>Web前端-实习生</h1>
                            <span className={style.salary}>3-8K</span>
                        </div>
                        <p>
                            厦门
                            <span className="dolt"></span>
                            经验不限
                            <span className="dolt"></span>
                            本科
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
                            <a href="/">立即沟通</a>
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
                                <img
                                    src="https://img.bosszhipin.com/beijin/upload/avatar/20200902/24b4d3d54d3e0618bff035d20486ce315aa70191c79e80ad40a1688e15647313_s.jpg?x-oss-process=image/resize,w_100,limit_0"
                                    alt=""
                                />
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
                                    （1）负责产品的前端开发；
                                    （2）与服务端开发、设计、产品人员沟通，保证产品质量和开发进度；
                                    （3）对代码进行调试，快速定位并解决问题，应用前沿技术对项目进行持续优化。
                                    任职要求：
                                    （1）负责产品的前端开发；
                                    （2）与服务端开发、设计、产品人员沟通，保证产品质量和开发进度；
                                    （3）对代码进行调试，快速定位并解决问题，应用前沿技术对项目进行持续优化。
                                    `}
                            />

                            <JobSec
                                title="公司介绍"
                                text={`深刻的感受到这一段话
                                如果可以，我们能不能一起留在这里
                                不去所谓的北上广，不为繁华外表光鲜
                                每天9点上班，18点下班，大小周放假 还可以享受五险一金、高薪和晋升
                                熟悉每一条街道的名字 吃遍每一家好吃的小吃
                                有一大帮死党或闺蜜或基友 和心爱的人一起慢慢变老
                                体会小城市美好和种种回忆
                                    `}
                            />

                            <JobSec
                                title="工作地点"
                                text={`厦门市 湖里区 万达广场写字楼C1号楼 1806`}
                            />
                        </div>
                    </div>
                    <div className={style.job_slider}>
                        <div className={style.slider_company}>
                            <p className={style.title}>公司基本信息</p>
                            <div className={style.company_info}>
                                <a href="/">
                                    <img
                                        src="https://img.bosszhipin.com/beijin/upload/com/logo/20200706/d5428cb71488635877259bc0c39646615aa70191c79e80ad40a1688e15647313.jpg?x-oss-process=image/resize,w_120,limit_0"
                                        alt=""
                                    />
                                </a>
                                <a href="/">厦门总轩</a>
                            </div>
                            <p>
                                <i className={icon.iconfont}>&#xe613;</i>
                                未融资
                            </p>
                            <p>
                                <i className={icon.iconfont}>&#xe619;</i>
                                20-99人
                            </p>
                            <p>
                                <i className={icon.iconfont}>&#xe64b;</i>
                                电子商务
                            </p>
                            <p className={style.gray}>更新于：2020-11-12</p>
                        </div>
                        <div className={style.promotion_job}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Item;
