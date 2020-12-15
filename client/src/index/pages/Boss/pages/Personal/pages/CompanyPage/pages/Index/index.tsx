import React from 'react';
import style from './index.scss';
import icon from '@/iconfont.scss';
import Selected from '@/index/components/Selected';

const Base: React.FC = () => {
    return (
        <div className={style.base_info}>
            <h4>公司基本信息</h4>
            <div className={style.sub_title}>
                丰富的公司介绍，能获得更多求职者的青睐，为你的职位带来更多查看与沟通
            </div>
            <form>
                <div className={style.form_item}>
                    <div className={style.item_label}>公司logo：</div>
                    <div className={style.item_content}>
                        <div className={style.upd_box}>
                            <div className={style.logo_box}>
                                <i className={icon.iconfont}>&#xe6a7;</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.form_item}>
                    <div className={style.item_label}>公司名称：</div>
                    <div className={style.item_content}>
                        <div className={`${style.ipt_wrap}`}>
                            <input
                                type="text"
                                className={style.disabled}
                                placeholder="请填写公司名称"
                            />
                        </div>
                    </div>
                </div>
                <div className={style.form_item}>
                    <div className={style.item_label}>所在行业：</div>
                    <div className={style.item_content}>
                        <div className={`${style.ipt_wrap} ${style.disabled} `}>
                            <input
                                type="text"
                                className={style.disabled}
                                placeholder="请填写所在行业"
                            />
                        </div>
                    </div>
                </div>
                <div className={style.form_item}>
                    <div className={style.item_label}>融资阶段：</div>
                    <div className={style.item_content}>
                        <Selected
                            styleSheet={{ width: 300, menuDisplay: false }}
                            inputPlaceholder="请选择"
                            selectMenu={['不限', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上']}
                        />
                    </div>
                </div>
                <div className={style.form_item}>
                    <div className={style.item_label}>人员规模：</div>
                    <div className={style.item_content}>
                        <Selected
                            styleSheet={{ width: 300, menuDisplay: true }}
                            inputPlaceholder="请选择"
                            selectMenu={[
                                '0-20人',
                                '20-99人',
                                '100-499人',
                                '500-999人',
                                '1000-10000人',
                            ]}
                        />
                    </div>
                </div>
                <div className={style.form_btns}>
                    <button className={style.btn}>保存</button>
                </div>
            </form>
        </div>
    );
};

export default Base;
