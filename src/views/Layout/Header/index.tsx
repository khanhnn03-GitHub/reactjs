import { Layout } from "antd"
import { IoIosCart } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import './style.scss';
import React from "react";


const Header = () => {
  return (
    <>
        <div className="header">
            <div className="header1">
                <a className="header-text">TRANG CHỦ</a>
                <a className="header-text">GIỚI THIỆU</a>
                <a className="header-text">SẢN PHẨM
                    <span > <RiArrowDropDownLine style={{ fontSize: '25px' } } /> </span>
                </a>
                <a className="header-text">TIN TỨC</a>
                <a className="header-text">HÌNH ẢNH-VIDEO
                    <span > <RiArrowDropDownLine style={{ fontSize: '25px' } } /> </span>
                </a>
                <a className="header-text">PHÂN TÍCH-KIẺM NGHIỆM</a>
                <a className="header-text">DANH SÁCH ĐẠI LÝ</a>
                <a className="header-text">LIÊN HỆ
                    <span > <RiArrowDropDownLine style={{ fontSize: '25px' } } /> </span>
                </a>
                <a className="header-text" > <IoIosCart /> </a>
            </div>


        </div>
    </>
  )
}

export default Header
