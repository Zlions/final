import React from 'react';
import style from './index.scss'
import iconfont from '@/iconfont.scss';

const FilterSelect = () => {
    return (
        <div className={style.filter_select_box}>
            <div className={style.dropdown_wrap}>
                <span className={style.dropdown_select}>工作经验</span>
                <i className={iconfont.iconfont}>&#xe6a8;</i>
                <div className={style.dropdown_menu} style={{display: 'none'}}>
                    <ul>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                    </ul>
                </div>
            </div>
            <div className={style.dropdown_wrap}>
                <span className={style.dropdown_select}>学历要求</span>
                <i className={iconfont.iconfont}>&#xe6a8;</i>
                <div className={style.dropdown_menu} style={{display: 'none'}}>
                    <ul>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                    </ul>
                </div>
            </div>
            <div className={style.dropdown_wrap}>
                <span className={style.dropdown_select}>薪资要求</span>
                <i className={iconfont.iconfont}>&#xe6a8;</i>
                <div className={style.dropdown_menu} style={{display: 'none'}}>
                    <ul>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                    </ul>
                </div>
            </div>
            <div className={style.dropdown_wrap}>
                <span className={style.dropdown_select}>融资阶段</span>
                <i className={iconfont.iconfont}>&#xe6a8;</i>
                <div className={style.dropdown_menu} style={{display: 'none'}}>
                    <ul>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                    </ul>
                </div>
            </div>
            <div className={style.dropdown_wrap}>
                <span className={style.dropdown_select}>公司规模</span>
                <i className={iconfont.iconfont}>&#xe6a8;</i>
                <div className={style.dropdown_menu} style={{display: 'none'}}>
                    <ul>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                        <li>不限</li>
                    </ul>
                </div>
            </div>
            <a className={style.clear_condition} href="/">清空筛选条件</a>
        </div>
    );
}

export default FilterSelect;