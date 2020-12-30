import React, { ReactNode, useState } from "react";
import style from "./index.scss";

interface IProps {
    selectMenu: Array<string>;
    inputPlaceholder: string;
    choose?: Function;
    inputValue?: string;
    direction?: 'top' | 'bottom';
    styleSheet?: {
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
                    aria-placeholder="请选择"
                    value={props.inputValue ? props.inputValue : ""}
                    type="text"
                    placeholder={props.inputPlaceholder}
                />
            </div>
            <div
                className={`${style.dropdown_menu} ${(props.direction && props.direction === 'top') ? style.top : style.bottom}`}
                style={{ display: showMenu ? "block" : "none" }}
            >
                <ul className={style.options}>{lis}</ul>
            </div>
        </div>
    );
};

export default Selected;
