import React from "react";
import style from "./index.scss";
import iconfont from '../../../iconfont.scss';
import comAvatar from '~/assets/comAvatar.jpg';

interface IProps {
    pos: {
        id: "",
        name: "";
        addr: "";
        city: "";
        finance: "";
        experience: "";
        education: "";
        describe: "";
        belongTo: {
            describe: "";
            id: "";
            addr: "";
            name: "";
            finance: "";
            scope: "";
            createdAt: "";
            type: {
                name: "";
            };
        };
    };
}

const JobPrimary = (props: IProps) => {



    return (
        <div className={style.job_primary}>
            <div className={style.info_primary}>
                <div className={style.primary_wrapper}>
                    <div className={style.job_title}>
                        <span className={style.job_name}>
                            <a href={`/job_item/${props.pos.id}`}>{props.pos.name}</a>
                        </span>
                        <span className={style.job_area}>[{props.pos.city}]</span>
                    </div>
                    <div className={style.job_limit}>
                        <span className={style.red}>{props.pos.finance}</span>
                        <p>
                            {props.pos.experience}
                            <span className="vline"></span>
                            {props.pos.education}
                        </p>
                        <div className={style.chat}>
                            <i className={iconfont.iconfont}>&#xe656;</i>
                            于女士
                        </div>
                    </div>
                </div>
                <div className={style.info_company} onClick={(e) => {
                    e.stopPropagation();
                    location.pathname = `/company_item/${props.pos.belongTo.id}`
                }}>
                    <div className={style.company_text}>
                        <h3 className={style.name}>{props.pos.belongTo.name}</h3>
                        <p>
                            {props.pos.belongTo.type.name}
                            <span className="vline"></span>
                            {props.pos.belongTo.finance}
                            <span className="vline"></span>
                            {props.pos.belongTo.scope}
                        </p>
                    </div>
                    <div className={style.company_logo}>
                        <img
                            src={comAvatar}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={style.info_append}>
                <div className={style.tags}>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                    <span className={style.tag_item}>Safari</span>
                </div>
                <div className={style.info_desc}>加班补助，五险一金，年终奖，节日福利，带薪年假，定期体检</div>
            </div>
        </div>
    );
};

export default JobPrimary;
