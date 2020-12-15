import React from 'react';
import style from './index.scss';

const Position: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.job_list}>
                <div className={style.job_container}>
                    <div className={style.add_btn}>
                        <a href="/boss/position_detail">发布职位</a>
                    </div>
                    <div className={style.job_list_wrap}>
                        <ul className={style.job_list_content}>
                            <li className={`${style.job_info} ${style.non_checked}`}>
                                <div className={style.info_container}>
                                    <div className={style.job_title}>
                                        服务员
                                        <span>待审核</span>
                                    </div>
                                    <div className={style.info_labels}>
                                        莆田
                                        <span className="vline"></span>
                                        经验不限
                                        <span className="vline"></span>
                                        学历不限
                                        <span className="vline"></span>
                                        4-6K
                                    </div>
                                </div>
                                <div className={style.date_container}>
                                    <span>2020-11-15发布</span>
                                </div>
                                <div className={style.option_container}>
                                    <a href="/boss/position_detail">编辑</a>
                                    <a href="/">删除</a>
                                </div>
                            </li>
                            <li className={`${style.job_info} ${style.non_checked}`}>
                                <div className={style.info_container}>
                                    <div className={style.job_title}>
                                        服务员
                                        <span>待审核</span>
                                    </div>
                                    <div className={style.info_labels}>
                                        莆田
                                        <span className="vline"></span>
                                        经验不限
                                        <span className="vline"></span>
                                        学历不限
                                        <span className="vline"></span>
                                        4-6K
                                    </div>
                                </div>
                                <div className={style.date_container}>
                                    <span>2020-11-15发布</span>
                                </div>
                                <div className={style.option_container}>
                                    <a href="/">编辑</a>
                                    <a href="/">删除</a>
                                </div>
                            </li>
                            <li className={`${style.job_info} ${style.non_checked}`}>
                                <div className={style.info_container}>
                                    <div className={style.job_title}>
                                        服务员
                                        <span>待审核</span>
                                    </div>
                                    <div className={style.info_labels}>
                                        莆田
                                        <span className="vline"></span>
                                        经验不限
                                        <span className="vline"></span>
                                        学历不限
                                        <span className="vline"></span>
                                        4-6K
                                    </div>
                                </div>
                                <div className={style.date_container}>
                                    <span>2020-11-15发布</span>
                                </div>
                                <div className={style.option_container}>
                                    <a href="/">编辑</a>
                                    <a href="/">删除</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Position;
