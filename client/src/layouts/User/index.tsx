import React from "react";
import style from "./index.scss";
import HeaderLayout from "./components/Header";


const BasicLayout: React.FC = props => {
    return (
        <div>
            <div className={style.header}>
                <HeaderLayout />
            </div>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    );
};

export default BasicLayout;
