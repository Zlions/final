import React, { CSSProperties, useEffect, useState } from "react";
import style from "./index.scss";
import icon from "@/iconfont.scss";

const SearchPanel = (props: any) => {
    const [inputValue, setInputValue] = useState("");

    // 获取地址栏参数
    useEffect(() => {
        let params = props.props.location.search.substring(1);
        let paramsArr = params.split("=");
        if (paramsArr[0] === "inputValue") {
            setInputValue(paramsArr[1]);
        }

        if(inputValue) {
            console.log(inputValue, 'emit')
            handleClick('name')
        }
    }, [inputValue]);

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleClick = (type: string) => {
        console.log("12366465", inputValue, type);
        props.searchEvent && props.searchEvent(inputValue, type);
    };

    return (
        <div className={style.search_panel}>
            <div
                className={style.search_box}
                style={{
                    margin: props.left ? "0" : "0 auto",
                }}
            >
                <div className={style.search_form}>
                    <input
                        placeholder="搜索职位、公司"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        className={style.search_input}
                    />
                </div>
                <button
                    onClick={() => handleClick("name")}
                    className={style.search_btn}
                >
                    搜索
                </button>
            </div>
            <div
                className={style.hot_search}
                style={{
                    margin: props.left ? "0" : "0 auto",
                }}
            >
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
