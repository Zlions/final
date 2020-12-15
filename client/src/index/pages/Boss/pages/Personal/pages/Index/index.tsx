import React from "react";
import style from "./index.scss";
import Avatar from '~/assets/manDefaultAvatar.jpg'

const MyDatas: React.FC = () => {
    return (
        <div className={style.means}>
            <div className={style.item}>
                <div className={style.profile_title}>
                    基本信息
                    <span>编辑</span>
                </div>
                <div className={style.profile_item}>
                    <div className={style.item_primary}>
                        <div className={style.avator}>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className={style.row}>
                            <div className={style.t}>姓名：</div>
                            <div className={style.c}>zlion</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.t}>职位：</div>
                            <div className={style.c}>管理</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.profile_title}>联系方式</div>
                <div className={style.profile_item}>
                    <div className={style.item_primary}>
                        <div className={style.row}>
                            <a href="/">修改</a>
                            <div className={style.t}>微信：</div>
                            <div className={style.c}>zlion</div>
                        </div>
                        <div className={style.row}>
                            <a href="/">修改</a>
                            <div className={style.t}>邮箱：</div>
                            <div className={style.c}>管理</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.profile_title}>
                    任职信息
                    <span>更换公司</span>
                </div>
                <div className={style.profile_item}>
                    <div className={style.item_primary}>
                        <ul className={style.company_container}>
                            <li>
                                <div className={style.img_wrapper}>
                                    <img src={Avatar} alt="" />
                                </div>
                                <div className={style.text}>
                                    <div className={style.name}>
                                        朵唯旅店
                                        <span className="vline"></span>
                                        酒店
                                    </div>
                                    <div className={style.gray}>个体店铺</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDatas;
