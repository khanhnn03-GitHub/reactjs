import {IoIosCart} from "react-icons/io";
import {RiArrowDropDownLine} from "react-icons/ri";
import "./style.scss";
import React, {useRef} from "react";
import useOutsideAlerter from "@/views/Layout/Header/hook";

const Header = () => {
    const wrapperRef = useRef(null);
    const {isOpen, handlerClickCart} = useOutsideAlerter(wrapperRef);
    return (
        <>
            <div className="header">
                <a href={"/"} className="header-text">TRANG CHỦ</a>
                <a href={"/about"} className="header-text">GIỚI THIỆU</a>
                <a className="header-text" href={"/collections"}>SẢN PHẨM
                    <span className="d-flex"> <RiArrowDropDownLine style={{fontSize: "25px"}}/> </span>
                    <a href={"/collections/dong-trung-ha-thao-tuoi"} className="item">Đông trùng hạ thảo tươi</a>
                </a>
                <a href={"/blog/news"} className="header-text">TIN TỨC</a>
                <a className="header-text" href={"/pages/hinh-anh-video"}>HÌNH ẢNH-VIDEO
                    <span className="d-flex"> <RiArrowDropDownLine style={{fontSize: "25px"}}/> </span>
                    <a href="#" className="item"> Hình Ảnh Video </a>
                </a>
                <a className="header-text" href={"/pages/phan-tich-kiem-nghiem"}>PHÂN TÍCH-KIẺM NGHIỆM</a>
                <a className="header-text">DANH SÁCH ĐẠI LÝ</a>
                <a className="header-text"> LIÊN HỆ
                    <span className="d-flex"> <RiArrowDropDownLine style={{fontSize: "25px"}}/> </span>
                    <a href="#" className="item"> Danh sách Đại lý </a>
                </a>
                <div className="position-relative">
                    <a className="header-text"> <IoIosCart style={{fontSize: "17px"}} onClick={() => handlerClickCart() }/> </a>
                    {isOpen &&
                        <div className="position-absolute abc" ref={wrapperRef}>
                            <div className="" style={{background: "#5b0e0e" , color: "white"}}> GIỎ HÀNG CỦA TÔI (2 SẢN PHẨM)</div>
                            <div className="">asdsadsa</div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Header
