import React from "react";
import style from "./index.scss";

const Company = () => {
    return (
        <div className={style.sub_li}>
            <a href="/" className={style.company_info}>
                <img
                    src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171118/b841e7655fb1f472005a543d52200789cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0"
                    alt=""
                />
                <div className={style.company_text}>
                    <h4>夕阳游戏</h4>
                    <p>
                        天使轮
                        <span className="vline"></span>
                        游戏
                    </p>
                </div>
            </a>
            <a href="/" className={style.about_info}>
                <p>
                    热招
                    <span className={style.h}>
                        Javascript
                    </span>
                    4-8K
                </p>
            </a>
        </div>
    );
};

export default Company;
