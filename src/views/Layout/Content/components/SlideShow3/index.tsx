import "./style.scss";
import bg16 from "@/assets/images/bg16.webp";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// eslint-disable-next-line react/function-component-definition
export default function SlideShow3() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="article-item">
                <img src={bg16}/>
                <div className="article-title">
                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                </div>
                <div className="article-info">
                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                    <div className="article-comment"><FaCommentDots />0</div>
                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                </div>
            </div>
            <div className="article-item">
                <img src={bg16}/>
                <div className="article-title">
                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                </div>
                <div className="article-info">
                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                    <div className="article-comment"><FaCommentDots />0</div>
                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                </div>

            </div>
            <div className="article-item">
                <img src={bg16}/>
                <div className="article-title">
                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                </div>
                <div className="article-info">
                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                    <div className="article-comment"><FaCommentDots />0</div>
                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                </div>

            </div>
            <div className="article-item">
                <img src={bg16}/>
                <div className="article-title">
                    <a href={"https://vienthaoduoc.vn/blogs/news/thong-bao-chuong-trinh-giam-gia-san-pham-tu-ngay-16-10-2023"}>THÔNG BÁO CHƯƠNG TRÌNH GIẢM GIÁ SẢN PHẨM TỪ NGÀY 16/10/2023</a>
                </div>
                <div className="article-info">
                    <div className="article-date"><MdOutlineCalendarMonth />22/10/23</div>
                    <div className="article-comment"><FaCommentDots />0</div>
                    <div className="aritcle-author"><FaUser />Phạm Nhật Minh</div>
                </div>

            </div>
        </Slider>
    );
}