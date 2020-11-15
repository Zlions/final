import React from "react";
import style from "./index.scss";

const PositionItem: React.FC = () => {
    return (
        <div className={style.job_primary}>
            <div className={style.info_primary}>
                <h3 className={style.name}>
                    <div className={style.title_box}>
                        <span className={style.job_title}>HTML5</span>
                        <span className={style.job_area}>[厦门]</span>
                    </div>
                </h3>
                <p>
                    <span className={style.red}>8-12K</span>
                    1-4年
                    <span className="vline"></span>
                    本科
                </p>
            </div>
            <div className={style.info_publis}>
                <h3 className={style.pub_name}>
                    <img
                        src="https://img.bosszhipin.com/beijin/mcs/useravatar/20170920/e92b26c2615a65b79c2a8250344237558003e215eaab6c8558c0317c1d75788b_s.jpg?x-oss-process=image/resize,w_40,limit_0"
                        alt=""
                    />
                    颜进伟
                    <span className="vline"></span>
                    HR
                </h3>
            </div>
        </div>
    );
};
export default PositionItem;
