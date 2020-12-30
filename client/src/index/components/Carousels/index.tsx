import { Carousel } from "antd";
import "antd/lib/carousel/style/index.css";
import React, { CSSProperties } from "react";
import ad from "~/assets/ad.png";

const contentStyle: CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const Carousels = () => {
    return (
        <Carousel autoplay>
            <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <img style={{ width: "100%", height: 300 }} src={ad} alt="" />
            </div>
            <div>
                <img style={{ width: "100%", height: 300 }} src={ad} alt="" />
            </div>
            <div>
                <img style={{ width: "100%", height: 300 }} src={ad} alt="" />
            </div>
            <div>
                <img style={{ width: "100%", height: 300 }} src={ad} alt="" />
            </div>
        </Carousel>
    );
};

export default Carousels;
