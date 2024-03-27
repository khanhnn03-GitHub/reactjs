import React, {Fragment, useCallback, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line import/extensions,import/no-unresolved
import sp8 from "/src/assets/images/sp8.webp";
// eslint-disable-next-line import/extensions
import sp3 from "@/assets/images/sp3.webp";
// eslint-disable-next-line import/extensions
import sp1 from "@/assets/images/sp1.webp";
// eslint-disable-next-line import/extensions
import sp2 from "@/assets/images/sp2.webp";
// eslint-disable-next-line import/extensions
import sp4 from "@/assets/images/sp4.webp";
// eslint-disable-next-line import/extensions
import sp5 from "@/assets/images/sp5.webp";
// eslint-disable-next-line import/extensions
import sp6 from "@/assets/images/sp6.webp";
// eslint-disable-next-line import/extensions
import sp7 from "@/assets/images/sp7.webp";
// eslint-disable-next-line import/extensions
import hgc4 from "@/assets/images/hgc4.webp";
// eslint-disable-next-line import/extensions
import ftbg from "@/assets/images/ftbg.webp";
// eslint-disable-next-line import/extensions
import vd_bg from "@/assets/images/vd_bg.png";

import SlideShow from "@/views/Layout/Content/components/SlideShow";
import colors from "tailwindcss/colors";
import SlideShow2 from "@/views/Layout/Content/components/SlideShow2";
import SlideShow3 from "@/views/Layout/Content/components/SlideShow3";
import {Button, Dropdown, Form} from "react-bootstrap";
import {Collapse} from "react-bootstrap"

const Welcome = () => {
    const navigate = useNavigate()

    interface ImageItem {
        link: string;
        title: string;
        price: string;
        urlPage: string;
    }


    const images: ImageItem[] = [
        {
            link: sp1,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp2,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp3,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp4,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp5,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp6,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 22GR",
            price: "4.000.000d",
            urlPage: "/city",
        },
        {
            link: sp7,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 10GR",
            price: "2.000.000d",
            urlPage: "/city",

        },
        {
            link: sp8,
            title: "ĐÔNG TRÙNG HẠ THẢO NGUYÊN CON KHÔ 36GR",
            price: "4.000.000d",
            urlPage: "/city",

        },
    ]

    const galleryItem = [
        {
            itemSrc: hgc4,
        }, {
            itemSrc: hgc4,
        }, {
            itemSrc: hgc4,
        }, {
            itemSrc: hgc4,
        }, {
            itemSrc: hgc4,
        }, {
            itemSrc: hgc4,
        },
    ]

    const handleClickProduct = (image: ImageItem) => {
        navigate(image.urlPage)
        console.log(image);
    };

    interface a {
        isOpen: boolean,
        title: string,
        text: string
    }

    const [open, setOpen] = useState<a[]>([
        {
            isOpen: false,
            text: "a",
            title: "CÔNG DỤNG CỦA ĐÔNG TRÙNG HẠ THẢO LÀ GÌ?",
        },
        {
            isOpen: false,
            text: "b",
            title: "CÔNG DỤNG CỦA ĐÔNG TRÙNG HẠ THẢO LÀ GÌ?",
        },
        {
            isOpen: false,
            text: "c",
            title: "CÔNG DỤNG CỦA ĐÔNG TRÙNG HẠ THẢO LÀ GÌ?",
        },
    ]);
    // const setCollapseExpand = (index: number) => {
    //     setOpen((o) => {
    //         o[index].isOpen = !o[index].isOpen;
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         return [].concat(o);
    //     })
    // }
    return (
        <>
            {/*<div>*/}
            {/*    {open.map((o, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <Button*/}
            {/*                onClick={() => setCollapseExpand(index)}*/}
            {/*                aria-controls="example-collapse-text"*/}
            {/*                aria-expanded={o.isOpen}*/}
            {/*            >*/}
            {/*                {o.title}*/}
            {/*            </Button>*/}
            {/*            <Collapse in={o.isOpen}>*/}
            {/*                <div id="example-collapse-text">*/}
            {/*                    {o.text}*/}
            {/*                </div>*/}
            {/*            </Collapse></div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="content">
                <div className="main-slider">
                    <SlideShow/>
                    <div className="slogan-text-center">HÃY DÀNH NHỮNG GÌ TỐT ĐẸP NHẤT CHO NGƯỜI THÂN CỦA BẠN</div>
                </div>
                <div className="page-container">
                    <div className="page-container-main">
                        <div className="home-collection">
                            <div className="wrapper">
                                <div className="inner">
                                    <h2 className="section-title-text-center">SẢN PHẨM NỔI BẬT</h2>
                                    <div className="hc-tabs-wrapper">
                                        <div className="tab-text-center1">
                                            <button className="tab-text-center">Sản phẩm nổi bật</button>
                                        </div>
                                        <div className="hc-tabcontent">
                                            <div className="grid-uniform">
                                                {
                                                    images.map((image, index) => (
                                                        <div
                                                            className="grid__item-large--one-quarter-medium--one-third-small--one-half"
                                                            key={index}>
                                                            <div className="product-item"
                                                                 onClick={() => handleClickProduct(image)}>
                                                                <div className="product-img">
                                                                    <a href="#">
                                                                        <img style={{width:"100%"}} src={image.link}/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-title">
                                                                    <a href="#"
                                                                       className="product-title-text">{image.title}</a>
                                                                </div>
                                                                <div className="product-price-clearfix">
                                                                    <span className="current-price">{image.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-quality">
                            <div className="wrapper">
                                <div className="inner">
                                    <h2 className="section-title-text-center">QUÀ TẶNG QUÝ GIÁ TỪ THIÊN NHIÊN</h2>
                                    <div className="box">
                                        <div
                                            className="grid__item-large--one-third-medium--one-whole-small--one-whole-hqu-left">
                                            <div className="grid">
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-content-text-right">
                                                            <div className="hqu-title">AN TOÀN VÀ TỰ NHIÊN</div>
                                                            <div className="hqu-desc">Các thành phần của thuốc đều có
                                                                nguồn gốc thảo mộc tự nhiên 100%, không lẫn hóa chất gây
                                                                kích ứng.
                                                            </div>
                                                        </div>
                                                        <div className="hqu-img">
                                                            <img
                                                                src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-content-text-right">
                                                            <div className="hqu-title">CHI PHÍ HỢP LÝ, HIỆU QUẢ CAO
                                                            </div>
                                                            <div className="hqu-desc">Với giá thành vô cùng hợp lý cùng
                                                                hiệu quả nhanh chóng, chắc chắn khách hàng sẽ cảm thấy
                                                                hài lòng.
                                                            </div>
                                                        </div>
                                                        <div className="hqu-img">
                                                            <img style={{position:"absolute", top:"27%", left:"22%"}} src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-content-text-right">
                                                            <div className="hqu-title">CHÍNH SÁCH HOÀN TIỀN 100%</div>
                                                            <div className="hqu-desc">Nếu khách hàng phát hiện sản phẩm
                                                                chất lượng thấp, hàng giả, không như quảng cáo có thể
                                                                hoàn tiền
                                                            </div>
                                                        </div>
                                                        <div className="hqu-img">
                                                            <img style={{position:"absolute", top:"27%", left:"22%"}} src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__item-large--one-third-medium--one-whole-small--one-whole">
                                            <div className="hqu-center-img-text-center">
                                                <img
                                                    src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_product_img.png?v=227"/>
                                            </div>
                                        </div>
                                        <div
                                            className="grid__item-large--one-third-medium--one-whole-small--one-whole-hqu-right">
                                            <div className="grid">
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-img">
                                                            <img style={{position:"absolute", top:"27%", left:"22%"}} src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                        <div className="hqu-content-text-left">
                                                            <div className="hqu-title">ĐỐI VỚI PHỤ NỮ VÀ TRẺ EM</div>
                                                            <div className="hqu-desc">có tác dụng làm đẹp da, chống lão
                                                                hóa, ngăn ngừa nếp nhăn, tăng sức đề kháng và bồi bổ
                                                                toàn diện cho sức khỏe.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-img">
                                                            <img style={{position:"absolute", top:"27%", left:"22%"}} src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                        <div className="hqu-content-text-left">
                                                            <div className="hqu-title">ĐỐI VỚI NAM GIỚI</div>
                                                            <div className="hqu-desc">giúp tăng cường chức năng sinh lý
                                                                cho nam giới, hạn chế hiện tượng xuất tinh sớm.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                    <div className="hqu-item-clearfix">
                                                        <div className="hqu-img">
                                                            <img style={{position:"absolute", top:"27%", left:"22%"}} src="https://theme.hstatic.net/1000269374/1000344896/14/hqu_detail_img1.png?v=227"/>
                                                        </div>
                                                        <div className="hqu-content-text-left">
                                                            <div className="hqu-title">ĐỐI VỚI NGƯỜI CAO TUỔI</div>
                                                            <div className="hqu-desc">giúp tăng sức đề kháng, tăng cường
                                                                hệ miễn dịch, làm giảm cholesterol trong máu và chống xơ
                                                                vữa động mạch.
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
                        <div className="home-gallery1">
                            <div className="wrapper">
                                <div className="inner">
                                    <h2 className="section-title-text-center">GALLERY</h2>
                                    <div className="section">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="row">
                                                    {
                                                        galleryItem.map((item, index) => (
                                                            <div key={index} className="col-4">
                                                                <div className="hg-item">
                                                                    <a>
                                                                        <img className="hg-item1" src={item.itemSrc}/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="hg-item">
                                                    <img className="hg-item2" src={vd_bg}/>
                                                    <div className="hg-item-title-text-center" style={{position: "relative",
                                                        color: "white",
                                                        bottom: "70px"}}>VIỆT NAM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-testimonials">
                            <div className="ht-overlay"></div>
                            <div className="wrapper">
                                <div className="inner">
                                    <div className="ht-content">
                                        <div className="section-title-text-center">ĐÁNH GIÁ CỦA KHÁCH HÀNG</div>
                                        <div className="owl-home-testimonials-slider">
                                            <SlideShow2/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-articles">
                            <div className="wrapper">
                                <div className="inner">
                                    <h2 className="section-title-text-center">TIN TỨC NỔI BẬT</h2>
                                    <div className="slick-slider">
                                        <div className="owl-carousel-owl-theme">
                                            <SlideShow3/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-contact">
                            <div className="wrapper">
                                <div className="inner">
                                    <h2 className="section-title-text-center">LIÊN HỆ TƯ VẤN VÀ GIẢI ĐÁP</h2>
                                    <div className="grid1">
                                        <div
                                            className="grid__item-large--one-quarter-medium--one-half-small--one-whole">
                                            <div className="hco-item">
                                                <div className="hco-title">HỖ TRỢ TRỰC TUYẾN</div>
                                                <div className="hco-desc">Bạn muốn tìm hiểu thêm thông tin về các loại
                                                    Đông Trùng Hạ Thảo của VIỆN NGHIÊN CỨU THẢO DƯỢC VIỆT NAM?
                                                </div>
                                                <div className="hco-viewmore">
                                                    <a href="https://www.facebook.com/profile.php?id=100007582246054">LIÊN
                                                        HỆ NGAY </a>
                                                </div>
                                            </div>
                                            <div className="hco-item">
                                                <div className="hco-title">HỖ TRỢ TRỰC TUYẾN</div>
                                                <div className="hco-desc">Bạn muốn tìm hiểu thêm thông tin về các loại
                                                    Đông Trùng Hạ Thảo của VIỆN NGHIÊN CỨU THẢO DƯỢC VIỆT NAM?
                                                </div>
                                                <div className="hco-viewmore">
                                                    <a href="https://www.facebook.com/profile.php?id=100007582246054">LIÊN
                                                        HỆ NGAY </a>
                                                </div>
                                            </div>
                                            <div className="hco-item">
                                                <div className="hco-title">HỖ TRỢ TRỰC TUYẾN</div>
                                                <div className="hco-desc">Bạn muốn tìm hiểu thêm thông tin về các loại
                                                    Đông Trùng Hạ Thảo của VIỆN NGHIÊN CỨU THẢO DƯỢC VIỆT NAM?
                                                </div>
                                                <div className="hco-viewmore">
                                                    <a href="https://www.facebook.com/profile.php?id=100007582246054">LIÊN
                                                        HỆ NGAY </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="grid__item-large--two-quarters-medium--one-whole-small--one-whole">
                                            <div className="hco-contact-form">
                                                <div className="hco-contact-form-title-text-center">GIẢI ĐÁP MỌI THẮC
                                                    MẮC CỦA KHÁCH HÀNG
                                                </div>
                                                <div className="form-vertical-clearfix">
                                                    <div className="mg-15">
                                                        <div className="mg">
                                                            <div className="text-mg">HỌ TÊN CỦA BẠN</div>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="mg">
                                                            <div className="text-mg">ĐỊA CHỈ EMAIL CỦA BẠN</div>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="mg">
                                                            <div className="text-mg">SỐ ĐIỆN THOẠI CỦA BẠN</div>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="mg-15">
                                                        <div className="text-mg">NỘI DUNG</div>
                                                        <input type="text"/>
                                                        <div className="hco-form-note">* Thắc mắc của bạn sẽ được phản
                                                            hồi trong 24h. Xin cảm ơn!
                                                        </div>
                                                        <input className="btnContactSubmit" type="submit"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="grid__item-large--one-quarter-medium--one-half-small--one-whole-float-right">
                                            <div className="hco-title">NHỮNG CÂU HỎI THƯỜNG GẶP</div>
                                            <div className="ac-container">
                                                <div className="ac-1">CÔNG DỤNG CỦA ĐÔNG TRÙNG HẠ THẢO LÀ GÌ?</div>
                                                <article className="ac-medium">
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    <p>"Đông Trùng Hạ Thảo như là thần dược với công dụng cải lão hoàn
                                                        đồng, hồi xuân sinh lực, có tác dụng “Bổ phế ích can, bổ tinh
                                                        điền tủy, chi huyết hoa đàm”; “Bổ phế ích thận, bổ dưỡng tạng
                                                        phủ”; “Tư ân tráng dương, khư bệnh kiên thân”; là thần dược “Tư
                                                        bổ dược thiện”, có thể chữa được “Bách hư bách tổn”</p>
                                                </article>
                                                <div className="ac-1">CÔNG DỤNG CỦA ĐÔNG TRÙNG HẠ THẢO LÀ GÌ?</div>
                                                <article className="ac-medium">
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    <p>"Đông Trùng Hạ Thảo như là thần dược với công dụng cải lão hoàn
                                                        đồng, hồi xuân sinh lực, có tác dụng “Bổ phế ích can, bổ tinh
                                                        điền tủy, chi huyết hoa đàm”; “Bổ phế ích thận, bổ dưỡng tạng
                                                        phủ”; “Tư ân tráng dương, khư bệnh kiên thân”; là thần dược “Tư
                                                        bổ dược thiện”, có thể chữa được “Bách hư bách tổn”</p>
                                                </article>
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

export default Welcome
