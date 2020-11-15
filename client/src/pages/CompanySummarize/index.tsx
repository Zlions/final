import React from "react";
import JobSec from "../components/JobSec";
import style from "./index.scss";
import icon from "../../iconfont.scss";
import { Carousel } from "antd";

const CompanySummarize = () => {
    return (
        <>
            <div className={style.company_hotjob}>
                <div className={style.inner}>
                    <h3>
                        热招职位
                        <a href="/company/:id/position">
                            查看全部4个职位<i className={icon.iconfont}>&#xe601;</i>
                        </a>
                    </h3>
                    <ul>
                        <li>
                            <a href="/">
                                <div className={style.info_primary}>
                                    <div className={style.name}>
                                        <span>8-10K</span>
                                        <b>HTML5</b>
                                    </div>
                                    <p className={style.gray}>
                                        1-3年
                                        <span className="dolt"></span>
                                        本科
                                        <span className="dolt"></span>
                                        厦门
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className={style.info_primary}>
                                    <div className={style.name}>
                                        <span>8-10K</span>
                                        <b>HTML5</b>
                                    </div>
                                    <p className={style.gray}>
                                        1-3年
                                        <span className="dolt"></span>
                                        本科
                                        <span className="dolt"></span>
                                        厦门
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className={style.info_primary}>
                                    <div className={style.name}>
                                        <span>8-10K</span>
                                        <b>HTML5</b>
                                    </div>
                                    <p className={style.gray}>
                                        1-3年
                                        <span className="dolt"></span>
                                        本科
                                        <span className="dolt"></span>
                                        厦门
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.job_box}>
                <div className={style.inner}>
                    <div className={style.job_detail}>
                        <div className={style.detail_content}>
                            <JobSec
                                title="夕游公司简介"
                                text={`厦门夕游网络科技有限公司，专注提供游戏行业技术产品及服务，为手游、H5游戏、页游等产业。提供专业、可扩展的游戏运营技术解决方案。主营业务包括手游联运平台系统、H5联运平台系统、手游发行系统、H5发行系统、棋牌游戏定制开发、游戏行业资质办理等产品及服务。作为游戏行业技术服务解决方案专家，将运营文化产业和用 户体验相结合链接上下游市场资源，致力于重塑并优化产业生态和服务形式，目前已服务于国内外多家企业。`}
                            />
                            <JobSec
                                title="公司地点"
                                text={`厦门市 湖里区 万达广场写字楼C1号楼 1806`}
                            />
                        </div>
                    </div>
                    <div className={style.slider}>
                        <JobSec
                            title="公司环境"
                            html={
                                <Carousel autoplay>
                                    <div>
                                        <img
                                            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/2ad15160a7d5f06d87b627907f9a694a.jpg?x-oss-process=image/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s&x-oss-process=image/resize,w_300,limit_0"
                                            alt=""
                                            className={style.carousel}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/2ad15160a7d5f06d87b627907f9a694a.jpg?x-oss-process=image/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s&x-oss-process=image/resize,w_300,limit_0"
                                            alt=""
                                            className={style.carousel}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/2ad15160a7d5f06d87b627907f9a694a.jpg?x-oss-process=image/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s&x-oss-process=image/resize,w_300,limit_0"
                                            alt=""
                                            className={style.carousel}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/2ad15160a7d5f06d87b627907f9a694a.jpg?x-oss-process=image/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s&x-oss-process=image/resize,w_300,limit_0"
                                            alt=""
                                            className={style.carousel}
                                        />
                                    </div>
                                </Carousel>
                            }
                        />

                        <JobSec
                            title="夕游游戏招聘Boss"
                            html={
                                <ul className={style.recruiter_list}>
                                    <li>
                                        <div className={style.figure}>
                                            <img
                                                src="https://img.bosszhipin.com/beijin/upload/avatar/20200718/92fa067ad9b5440eee9a47ad3b49aa2bc997fdfe397c35209994d4cf8bedc2ca_s.jpg?x-oss-process=image/resize,w_100,limit_0"
                                                alt=""
                                            />
                                        </div>
                                        <div className={style.info_text}>
                                            <div className={style.info}>
                                                <a href="/" className={style.info_name}>
                                                    郑伟斌
                                                    <span className="vline"></span>
                                                    CTO
                                                </a>
                                            </div>
                                            <p className={style.gray}>
                                                正在招聘 “COCOS2DX” 等 2 个职位
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.figure}>
                                            <img
                                                src="https://img.bosszhipin.com/beijin/upload/avatar/20200718/92fa067ad9b5440eee9a47ad3b49aa2bc997fdfe397c35209994d4cf8bedc2ca_s.jpg?x-oss-process=image/resize,w_100,limit_0"
                                                alt=""
                                            />
                                        </div>
                                        <div className={style.info_text}>
                                            <div className={style.info}>
                                                <a href="/" className={style.info_name}>
                                                    郑伟斌
                                                    <span className="vline"></span>
                                                    CTO
                                                </a>
                                            </div>
                                            <p className={style.gray}>
                                                正在招聘 “COCOS2DX” 等 2 个职位
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default CompanySummarize;
