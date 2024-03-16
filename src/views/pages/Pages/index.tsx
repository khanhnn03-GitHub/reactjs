import "./style.scss"
import React from "react";
const Pages = () => {
    return(
        <>
            <div className="header-collections">
                <div className="breadcrumb-content">
                    <div className="wrapper">
                        <div className="inner-text-center">
                            <div className="breadcrumb-big">
                                <h3>HÌNH ẢNH - VIDEO</h3>
                            </div>
                            <div className="breadcrumb-small">
                                <a href="/" title="Quay lai trang chu">Trang chủ</a>
                                <span aria-hidden={"true"}> / </span>
                                <span>HÌNH ẢNH - VIDEO</span>
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
                                    <h5>HÌNH ẢNH - VIDEO</h5>
                                    <div className="rte">
                                        <div className="youtube-embed-wrapper">
                                            <iframe src="https://www.youtube.com/embed/Cb6Ww0Qm2nw" width="100%" height="640"></iframe>
                                            <iframe src="https://www.youtube.com/embed/Cb6Ww0Qm2nw" width="100%" height="640"></iframe>
                                            <iframe src="https://www.youtube.com/embed/Cb6Ww0Qm2nw" width="100%" height="640"></iframe>
                                        </div>
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

export default Pages;