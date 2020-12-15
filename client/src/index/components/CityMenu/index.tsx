import React from 'react'
import style from './index.scss'
import iconfont from '../../../iconfont.scss';

const CityMenu = () => {
    return (
        <div className={style.condition_box}>
            <dl className={style.condition_city}>
                <dd className={style.city_wrapper}>
                    <a className={style.cur_city} href="/">厦门</a>
                    <i className={iconfont.iconfont}>&#xe601;</i>
                    <a className={style.no_limit} href="/">不限</a>
                    <i className={iconfont.iconfont}>&#xe601;</i>
                    <span>热门城市: </span>
                    <a href="/">全国</a>
                    <a href="/">北京</a>
                    <a href="/">上海</a>
                    <a href="/">广州</a>
                    <a href="/">深圳</a>
                    <a href="/">杭州</a>
                    <a href="/">天津</a>
                    <a href="/">西安</a>
                    <a href="/">苏州</a>
                    <a href="/">武汉</a>
                    <a href="/">厦门</a>
                    <a href="/">长沙</a>
                    <a href="/">成都</a>
                    <a href="/">郑州</a>
                    <a href="/">重庆</a>
                    <a href="/" className={style.all_city}>全部城市</a>
                </dd>
            </dl>
            <dl className={style.condition_district}>
                <dd className={style.district_wrap}>
                    <a className={`${style.district_no_limit} ${style.cur_district}`} href="/">不限</a>
                    <a href="/">思明区</a>
                    <a href="/">湖里区</a>
                    <a href="/">集美区</a>
                    <a href="/">同安区</a>
                    <a href="/">海沧区</a>
                    <a href="/">翔安区</a>
                </dd>
            </dl>
        </div>
    )
}

export default CityMenu