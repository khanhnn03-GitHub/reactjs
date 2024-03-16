import "./style.scss"
import React from "react";
import bg16 from "@/assets/images/bg16.webp";
const Pages1 = () => {
    return(
        <>
            <div className="header-collections">
                <div className="breadcrumb-content">
                    <div className="wrapper">
                        <div className="inner-text-center">
                            <div className="breadcrumb-big">
                                <h3>PHÂN TÍCH - KIỀM NGHIỆM</h3>
                            </div>
                            <div className="breadcrumb-small">
                                <a href="/" title="Quay lai trang chu">Trang chủ</a>
                                <span aria-hidden={"true"}> / </span>
                                <span>Phân tích - Kiềm nghiệm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="page-wrapper">
                    <div className="wrapper">
                        <div className="inner">
                            <div className="col-12">
                                <div className="title-clt">
                                    <h5>PHÂN TÍCH - KIỀM NGHIỆM</h5>
                                    <div className="rte">
                                        <p>CHỨNG NHẬN AN TOÀN THỰC PHẨM</p>
                                        <img src={bg16} alt=""/>
                                        <p>CHỨNG NHẬN AN TOÀN THỰC PHẨM</p>
                                        <img src={bg16} alt=""/>
                                        <p>CHỨNG NHẬN AN TOÀN THỰC PHẨM</p>
                                        <img src={bg16} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pages1