import style from "./index.scss";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import "antd/lib/pagination/style/index.css";
import CompanyItem from "@/pages/index/components/CompanyItem";
import api from "@/api";
import { ICompany } from "@/types";

const CompanyList: React.FC = () => {
    const [companys, setCompanys] = useState([] as any);

    useEffect(() => {
        api.getAllCompanyByCondition({ auditing: false }).then((resp) => {
            if (!resp.data.err) {
                let temp = resp.data.data.map((it: ICompany) => (<li key={it.id}>
                    <CompanyItem com={it} />
                </li>))
                setCompanys(temp);
            }
        });
    }, []);

    return (
        <div className={style.company_home}>
            <div className={style.filter_box}>
                <div className={style.filter_condition}>
                    <div className={`${style.filter_row} ${style.location}`}>
                        <span className={style.title}>公司地点：</span>
                        <span className={style.content}>
                            <a href="/" className={style.active}>
                                全国
                            </a>
                            <a href="/">北京</a>
                            <a href="/">上海</a>
                            <a href="/">广州</a>
                            <a href="/">深圳</a>
                            <a href="/">杭州</a>
                            <a href="/">西安</a>
                            <a href="/">天津</a>
                            <a href="/">苏州</a>
                            <a href="/">武汉</a>
                            <a href="/">厦门</a>
                            <a href="/">长沙</a>
                            <a href="/">成都</a>
                            <a href="/">郑州</a>
                            <a href="/">重庆</a>
                            <a href="/">全部城市</a>
                        </span>
                    </div>
                    <div className={`${style.filter_row} ${style.industry}`}>
                        <span className={style.title}>行业类型：</span>
                        <span className={style.content}>
                            <a href="/" className={style.active}>
                                不限
                            </a>
                            <a href="/">电子商务</a>
                            <a href="/">游戏</a>
                            <a href="/">媒体</a>
                            <a href="/">广告营销</a>
                            <a href="/">数据服务</a>
                            <a href="/">医疗健康</a>
                            <a href="/">生活服务</a>
                            <a href="/">O2O</a>
                            <a href="/">旅游</a>
                            <a href="/">分类信息</a>
                            <a href="/">音乐/视频/阅读 </a>
                            <a href="/">在线教育</a>
                            <a href="/">社交网络</a>
                            <a href="/">人力资源服务</a>
                            <a href="/">企业服务</a>
                            <a href="/">信息安全</a>
                            <a href="/">智能硬件</a>
                            <a href="/">移动互联网</a>
                            <a href="/">互联网</a>
                            <a href="/">计算机软件</a>
                            <a href="/">通信/网络设备</a>
                            <a href="/">广告/公关/会展</a>
                            <a href="/">互联网金融</a>
                            <a href="/">物流/仓储</a>
                            <a href="/">贸易/进出口</a>
                            <a href="/">咨询</a>
                            <a href="/">工程施工</a>
                            <a href="/">汽车生产</a>
                            <a href="/">其他行业</a>
                        </span>
                    </div>
                    <div className={`${style.filter_row} ${style.stage}`}>
                        <span className={style.title}>融资阶段：</span>
                        <span className={style.content}>
                            <a href="/" className={style.active}>
                                不限
                            </a>
                            <a href="/">未融资</a>
                            <a href="/">天使轮</a>
                            <a href="/">A轮</a>
                            <a href="/">B轮</a>
                            <a href="/">C轮</a>
                            <a href="/">D轮及以上</a>
                            <a href="/">已上市</a>
                            <a href="/">不需要融资</a>
                        </span>
                    </div>
                    <div className={`${style.filter_row} ${style.scale}`}>
                        <span className={style.title}>公司规模：</span>
                        <span className={style.content}>
                            <a href="/" className={style.active}>
                                不限
                            </a>
                            <a href="/">0-20人</a>
                            <a href="/">20-99人</a>
                            <a href="/">100-499人</a>
                            <a href="/">500-999人</a>
                            <a href="/">000-9999人</a>
                            <a href="/">10000人以上</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.company_tab_box}>
                <h4 className={style.company_count}>
                    共<span>{companys.length}</span>
                    家公司
                </h4>
                <ul>
                    {companys}
                    {/* <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li>
                    <li>
                        <CompanyItem />
                    </li> */}
                </ul>
            </div>
            {/* <div className={style.page}>
                <Pagination
                    className={`${style.page_panel} pagination_panel`}
                    pageSize={2}
                    defaultCurrent={1}
                    total={2}
                />
            </div> */}
        </div>
    );
};

export default CompanyList;
