import { Layout } from "antd"
import './style.scss'
import anh1 from "../../anh1.webp"
import React from "react";
const Footer = () => {

  return (
    <>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content11">
                    {/*<img className="anh1" src={anh1}></img>*/}
                    <div className="footer-content1">
                        <div className="footer-content2-1">
                            <div className="ft-contact">
                                <h3 className="ft-nav-text">VIỆN NGHIÊN CỨU THẢO DƯỢC VIỆT NAM</h3>
                                <div className="ft-contact-address">Địa chỉ: Số 54 ngõ 44 - Đường Đông Thắng - Phường Đông Ngạc - Quận Bắc Từ Liêm - Hà Nội</div>
                                <div className="ft-contact-tel">Số điện thoại: 098.224.8922 - 024.62972174</div>
                                <div className="ft-contact-email">Email: nhabvtv@gmail.com</div>
                            </div>
                        </div>
                        <div className="footer-content2-2">
                            <div className="ft-nav">
                                <h3 className="ft-nav-text">SẢN PHẨM</h3>
                                <div className="ft-nav1">Đông trùng hạ thảo tươi</div>
                            </div>
                        </div>
                        <div className="footer-content2-3">
                            <div className="ft-nav">
                                <h3 className= "ft-nav-text">MAIN MENU</h3>
                                <ul>
                                    <li>Trang chủ</li>
                                    <li>Giới thiệu</li>
                                    <li>Sản phẩm</li>
                                    <li>Tin tức</li>
                                    <li>Hình Ảnh - Video</li>
                                    <li>Phân tích - Kiểm nghiệm</li>
                                    <li>Danh sách đại lý</li>
                                    <li>Liên hệ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content2-4">
                            <div className="footer-content2-4-1">
                                <h3 className= "ft-nav-text">ĐĂNG KÝ NHẬN TIN</h3>
                                <div className="ft-sub-desc">Hãy nhập địa chỉ email của bạn vào ô dưới đây để có thể nhận được tất cả các tin tức mới nhất của Viện bảo vệ thực vật về các sản phẩm mới, các chương trình khuyến mãi mới. Chúng tôi xin đảm bảo sẽ không gửi mail rác, mail spam tới bạn.</div>
                                <div className="ft-sub-wrapper">
                                    <div className="ft-sub-wrapper1">

                                    </div>
                                    <span className="gui"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="footer-copyright-text">COPYRIGHTS © 2018 BY POWERED BY HARAVAN </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
