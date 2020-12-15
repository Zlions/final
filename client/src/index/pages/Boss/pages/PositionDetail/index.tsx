import Selected from '@/index/components/Selected';
import React from 'react';
import style from './index.scss';

const PositionDetail: React.FC = () => {
    return (
        <div className={style.job_manage}>
            <div className={style.job_edit}>
                <div className={style.job_container}>
                    <h3 className={style.title_container}>职位基本信息</h3>
                    <div className={style.form_row}>
                        <div className={style.title}>职位名称：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入职位名称"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>工作城市：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入工作城市"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>工作地点：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入工作地点"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>职位名称：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入职位名称"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.job_container}>
                    <h3 className={style.title_container}>职位要求</h3>
                    <div className={style.form_row}>
                        <div className={style.title}>经验要求：</div>
                        <div className={style.content}>
                            <Selected
                                inputPlaceholder="请输入"
                                styleSheet={{ width: 474, menuDisplay: false }}
                                selectMenu={['不限', '1年以内', '1-3年', '3-5年', '5-10年']}
                            />
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>学历要求：</div>
                        <div className={style.content}>
                            <Selected
                                inputPlaceholder="请输入"
                                styleSheet={{ width: 474, menuDisplay: false }}
                                selectMenu={[
                                    '不限',
                                    '初中及以下',
                                    '中专/中技',
                                    '高中',
                                    '大专',
                                    '本科',
                                    '硕士',
                                    '博士',
                                ]}
                            />
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>薪资详情：</div>
                        <div className={style.content}>
                            <span className={style.ipt_wrap}>
                                <input
                                    className={style.ipt}
                                    type="text"
                                    placeholder="请输入薪资详情"
                                />
                            </span>
                        </div>
                    </div>
                    <div className={style.form_row}>
                        <div className={style.title}>职位描述：</div>
                        <div className={style.content}>
                            <div className={style.textarea_wrap}>
                                <textarea
                                    placeholder="1.工作内容
2.任职需求
3.特别说明"
                                ></textarea>
                                <span className={style.count_num}>
                                    <span>39</span>
                                    /5000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.form_btn}>
                    <div className={style.btns}>
                        <button>保存并发布</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionDetail;
