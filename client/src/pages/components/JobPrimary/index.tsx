import React from "react";
import style from "./index.scss";
import iconfont from '../../../iconfont.scss';

const JobPrimary = () => {
    return (
        <div className={style.job_primary}>
            <div className={style.info_primary}>
                <div className={style.primary_wrapper}>
                    <div className={style.job_title}>
                        <span className={style.job_name}>
                            <a href="/">JS工程师</a>
                        </span>
                        <span className={style.job_area}>[深圳·南山区·科技园]</span>
                    </div>
                    <div className={style.job_limit}>
                        <span className={style.red}>8-12K</span>
                        <p>
                            经验不限
                            <span className="vline"></span>
                            本科
                        </p>
                        <div className={style.chat}>
                            <i className={iconfont.iconfont}>&#xe656;</i>
                            于女士
                        </div>
                    </div>
                </div>
                <div className={style.info_company}>
                    <div className={style.company_text}>
                        <h3 className={style.name}>同舟电子</h3>
                        <p>
                            计算机软件
                            <span className="vline"></span>
                            已上市
                            <span className="vline"></span>
                            500-999人
                        </p>
                    </div>
                    <div className={style.company_logo}>
                        <img
                            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20160419/6bebb2436268f8c05ba0aca11e8c2dc2821db6793fbdcce50f7e14c3694f0bf8.jpg?x-oss-process=image/resize,w_100,limit_0"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={style.info_append}>
                <div className={style.tags}>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                </div>
                <div className={style.info_desc}>加班补助，五险一金，年终奖，节日福利，带薪年假，定期体检</div>
            </div>
        </div>
    );
};

export default JobPrimary;
