import style from "./index.scss";
import React, { ReactNode } from "react";

interface IProps {
    title: string;
    text?: string;
    html?: ReactNode;
}

const JobSec: React.FC<IProps> = (props: IProps) => {
    return (
        <div className={style.job_sec}>
            <h3>
                {props.title}
                <span className="border"></span>
            </h3>

            <div className={style.text}>
                {props.text && props.text.split("\n").map((item, id) => {
                    return (
                        <span key={id}>
                            {item}
                            <br />
                        </span>
                    );
                })}
                {props.html && props.html}
            </div>
        </div>
    );
};

export default JobSec;
