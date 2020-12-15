import React, { CSSProperties } from "react";
import style from "./index.scss";
import icon from "../../../iconfont.scss";

interface Props {
    left ?: boolean
}

const SearchPanel = (props: Props) => {



    return (
        <div className={style.search_panel}>
            <div className={style.search_box} style={{
                margin: props.left ? '0': '0 auto'
            }}>
                <div className={style.search_form}>
                    <div className={style.position_sel}>
                        <span className={style.label_text}>
                            职位类型
                            <i className={`${icon.iconfont} ${style.up_down}`}>&#xe6a8;</i>
                        </span>
                        <div className={style.select_tree} style={{
                            display: 'none'
                        }}>
                            <ul className={style.tree_1}>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                            </ul>
                            <ul className={style.tree_2}>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                            </ul>
                            <ul className={style.tree_3}>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                                <li>
                                    <a href="/">不限</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <input
                        placeholder="搜索职位、公司"
                        type="text"
                        className={style.search_input}
                    />
                </div>
                <button className={style.search_btn}>搜索</button>
            </div>
            <div className={style.hot_search} style={{
                margin: props.left ? '0': '0 auto'
            }}>
                <b>热门职位：</b>
                <ul>
                    <li>ui设计师</li>
                    <li>电话销售</li>
                    <li>前台</li>
                    <li>全栈工程师</li>
                    <li>DBA</li>
                    <li>游戏场景</li>
                    <li>全栈工程师</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchPanel;
