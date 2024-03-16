import React from "react";
import hgc4 from "@/assets/images/hgc4.webp";
import "./style.scss";
import bg16 from "@/assets/images/bg16.webp";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {FaCommentDots, FaUser} from "react-icons/fa";
const Blog = () => {
    return(
        <>
            <div className="header-collections">
                <div className="breadcrumb-content">
                    <div className="wrapper">
                        <div className="inner-text-center">
                            <div className="breadcrumb-big">
                                <h3>TIN TỨC</h3>
                            </div>
                            <div className="breadcrumb-small">
                                <a href="/" title="Quay lai trang chu">Trang chủ</a>
                                <span aria-hidden={"true"}> / </span>
                                <span>Tất cả sản phẩm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PageContainer">
                <div className="main-content">
                    <div className="blog-wrapper">
                        <div className="wrapper">
                            <div className="inner">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="blog-sidebar">
                                            <div className="list-categories">
                                                <div className="blog-sb-title">
                                                    <span>DANH MỤC TIN TỨC</span>
                                                </div>
                                                    <div className="no-bullets"></div>
                                                <div className="blog-sb-banner">
                                                    <a href="#" >
                                                        <img src={hgc4} alt="" style={{width: "100%"}}/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="blog-content">
                                            <div className="blog-content-wrapper">
                                                <div className="blog-head">
                                                    <div className="blog-title">
                                                        <h3>TIN TỨC</h3>
                                                    </div>
                                                </div>
                                                <div className="blog-body">
                                                    {/*<div className="grid-uniform">*/}
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <img className="new1" src={bg16} style={{width: "100%"}}/>
                                                                <div className="article-title">
                                                                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                                                                </div>
                                                                <div className="article-info">
                                                                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                                                                    <div className="article-comment"><FaCommentDots />0</div>
                                                                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <img className="new1" src={bg16} style={{width: "100%"}}/>
                                                                <div className="article-title">
                                                                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                                                                </div>
                                                                <div className="article-info">
                                                                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                                                                    <div className="article-comment"><FaCommentDots />0</div>
                                                                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <img className="new1" src={bg16} style={{width: "100%"}}/>
                                                                <div className="article-title">
                                                                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                                                                </div>
                                                                <div className="article-info">
                                                                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                                                                    <div className="article-comment"><FaCommentDots />0</div>
                                                                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <img className="new1" src={bg16} style={{width: "100%"}}/>
                                                                <div className="article-title">
                                                                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                                                                </div>
                                                                <div className="article-info">
                                                                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                                                                    <div className="article-comment"><FaCommentDots />0</div>
                                                                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/*</div>*/}
                                                </div>
                                            </div>
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

export default Blog;