import React from 'react';
import style from './index.scss';
import icon from '@/iconfont.scss';

const Index: React.FC = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.boss_v}>企业版</div>
                <div className={style.inner}>
                    <div className={style.user_info}>
                        <i className={icon.iconfont}>&#xe602;</i>
                        <span className={style.have_msg}></span>
                        <span className={style.info_name}>有限公司</span>
                        <img src={require('../../assets/manDefaultAvatar.jpg')} alt="" />
                    </div>
                </div>
            </header>
            <div className={style.content}>
                <aside className={style.side_menu}>
                    <div className={style.avator}>
                        <img src={require('../../assets/manDefaultAvatar.jpg')} alt="" />
                        <p>有限公司</p>
                        <ul className={style.menu}>
                            <li>
                                <i className={icon.iconfont}>&#xe626;</i>
                                <span>职位管理</span>
                            </li>
                            <li>
                                <i className={icon.iconfont}>&#xe603;</i>
                                <span>推荐牛人</span>
                            </li>
                            <li className={style.cur}>
                                <i className={icon.iconfont}>&#xe688;</i>
                                <span>我的资料</span>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className={style.main}></main>
            </div>
        </>
    );
};

export default Index;
