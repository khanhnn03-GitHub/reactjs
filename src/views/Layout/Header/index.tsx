import { Layout } from "antd"
import { IoIosCart } from "react-icons/io";

import './style.scss';
import React from "react";


const Header = () => {
  return (
    <>
        <div className="header">
            <div className="header1">
                <a className="header-text">TRANG CHỦ</a>
                <a className="header-text">GIỚI THIỆU</a>
                <a className="header-text">SẢN PHẨM</a>
                <a className="header-text">TIN TỨC</a>
                <a className="header-text">HÌNH ẢNH-VIDEO</a>
                <a className="header-text">PHÂN TÍCH-KIẺM NGHIỆM</a>
                <a className="header-text">DANH SÁCH ĐẠI LÝ</a>
                <a className="header-text">LIÊN HỆ</a>
                <a className="header-text" > <IoIosCart /> </a>
            </div>


        </div>
    </>
  )
}

export default Header
