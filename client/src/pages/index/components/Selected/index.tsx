import React, { ReactNode, useState } from "react";
import style from "./index.scss";

interface IProps {
    selectMenu: Array<string>; // 下拉列表的选项
    inputPlaceholder: string; // placeholder
    choose?: Function; // 点击函数
    inputValue?: string; // 选中时显示的值
    direction?: "top" | "bottom"; // 显示方向
    styleSheet?: { // css样式
        width: number;
        menuDisplay: boolean;
    };
}

const Selected = (props: IProps) => {
    const [showMenu, setShowMenu] = useState(false);

    let lis: Array<ReactNode> = [];
    props.selectMenu.forEach((item, i) => {
        let li = (
            <li
                key={i}
                onClick={() => {
                    setShowMenu(false);
                    props.choose && props.choose(item);
                }}
            >
                <span>{item}</span>{" "}
            </li>
        );
        lis.push(li);
    });
    return (
        <div className={`${style.dropdown_wrap}`}>
            <div
                className={style.dropdown_filp}
                onClick={() => {
                    setShowMenu(!showMenu);
                }}
            >
                <input
                    style={{
                        width:
                            (props.styleSheet && props.styleSheet.width) || 300,
                    }}
                    disabled
                    value={props.inputValue ? props.inputValue : ""}
                    type="text"
                    placeholder={props.inputPlaceholder}
                />
            </div>
            <div
                className={`${style.dropdown_menu} ${
                    props.direction && props.direction === "top"
                        ? style.top
                        : style.bottom
                }`}
                style={{ display: showMenu ? "block" : "none" }}
            >
                <ul className={style.options}>{lis}</ul>
            </div>
        </div>
    );
};

export default Selected;
