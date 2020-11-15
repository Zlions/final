import React from "react";
import style from "./index.scss";

const HotCom = () => {
    return (
        <div className={style.sub_li}>
            <a href="/" className={style.company_info}>
                <div className={style.img_box}>
                    <img
                        src="https://img.bosszhipin.com/beijin/mcs/bar/20200403/c17014620d6dd3846465a59065ed1b6dbe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_100,limit_0"
                        alt=""
                    />
                </div>
                <div className={style.company_text}>
                    <h4>美图</h4>
                    <p>
                        D轮及以上
                        <span className="vline"></span>
                        移动互联网
                    </p>
                </div>
            </a>
            <a href="/" className={style.about_info}>
                <p>
                    <span className={style.text_blue}>136</span>个热招职位
                </p>
            </a>
        </div>
    );
};

export default HotCom;
