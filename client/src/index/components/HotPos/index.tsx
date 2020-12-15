import React from 'react';
import style from './index.scss';
import icon from '../../../iconfont.scss';

const HotPos = () => {
    return (
        <div className={style.sub_li}>
            <a href="/" className={style.job_info}>
                <div className={style.sub_li_top}>
                    <p className={style.name}>数据开发</p>
                    <i className={`${icon.iconfont} ${style.chat}`}>&#xe656;</i>
                    <p className={style.salary}>20-30k</p>
                </div>
                <p className={style.job_text}>
                    厦门
                    <span className="vline"></span>
                    3-5年
                    <span className="vline"></span>
                    本科
                </p>
            </a>
            <div className={style.sub_li_bottom}>
                <a href="/" className={style.user_info}>
                    <img
                        src="https://img.bosszhipin.com/beijin/upload/com/logo/20190717/9178f0aad8a239b97f921c6f5c192095cf8fce2ca5a3b1ae08dbafe854112624.png"
                        alt=""
                    />
                </a>
                <a href="/" className={style.company_info}>
                    <span className={style.com_name}>建信金科</span>
                    <span className={style.type}>银行</span>
                    <span className="vline"></span>
                    <span className={style.financing}>不需要融资</span>
                </a>
            </div>
        </div>
    );
};

export default HotPos;
