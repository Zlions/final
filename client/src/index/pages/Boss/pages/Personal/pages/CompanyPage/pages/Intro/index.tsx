import React from 'react';
import style from './index.scss';

const Intro: React.FC = () => {
    return (
        <div className={style.intro}>
            <h4>公司介绍</h4>
            <div className={style.sub_title}>
                可以简单介绍一下公司发展状况、服务领域、主要产品等信息
            </div>
            <div className={style.textarea_box}>
                <form>
                    <textarea></textarea>
                    <span className={style.counter}>
                        <span>1</span>/1000
                    </span>
                </form>
            </div>
            <button className={style.save_btn}>保存</button>
        </div>
    );
};

export default Intro;
