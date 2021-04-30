import style from "./index.scss";
import React from "react";

const PromotionJobItem = () => {
    return (
        <div className={style.promotion_item}>
            <div className={style.company_logo}>
                <img
                    src="https://img.bosszhipin.com/beijin/upload/com/logo/20190709/77942f624e249d2abe1fedaf1adceb5e60586f489d9eb0b3784b03dc9e89186e.png?x-oss-process=image/resize,w_100,limit_0"
                    alt=""
                />
            </div>
            <div className={style.info_primary}>
                <div className={style.name}>
                    <a href="/">
                        web前端
                        <span className={style.red}>4-8K</span>
                    </a>
                </div>
                <p className={style.gray}>
                    <a href="/">
                        云谷科技
                    </a>
                    <span className="vline"></span>
                    厦门
                </p>
            </div>
        </div>
    );
};

export default PromotionJobItem;
