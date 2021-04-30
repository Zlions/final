import React from "react";
import style from "./index.scss";

const HaveSee = () => {
    return (
        <div className={style.slider}>
            <div className={style.slider_list}>
                <h3>投递过的职位</h3>
                <p >暂无数据</p>
                <ul style={{display: 'none'}}>
                    <li>
                        <a href="/">
                            <h4>
                                JS工程师
                                <span className={style.red}>8-12K</span>
                            </h4>
                            <p>同舟电子</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h4>
                                JS工程师
                                <span className={style.red}>8-12K</span>
                            </h4>
                            <p>同舟电子</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h4>
                                JS工程师
                                <span className={style.red}>8-12K</span>
                            </h4>
                            <p>同舟电子</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h4>
                                JS工程师
                                <span className={style.red}>8-12K</span>
                            </h4>
                            <p>同舟电子</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HaveSee;