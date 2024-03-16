import "./style.scss"
import React from "react";
import {FaPaperPlane} from "react-icons/fa";
import {Input} from "antd";
import { Form } from "react-bootstrap";

const Footer = () => {

  return (
    <>
        <div className="footer">
            <div className="footer-content">
                <div className="wrapper">
                    <div className="ft-content">
                        <div className="row">
                            <div className="col-4">
                                <div className="ft-contact">
                                    <h3 className="ft-nav-text">VIỆN NGHIÊN CỨU THẢO DƯỢC VIỆT NAM</h3>
                                    <div className="fttext">Địa chỉ: Số 54 ngõ 44 - Đường Đông Thắng - Phường Đông Ngạc - Quận Bắc Từ Liêm - Hà Nội</div>
                                    <div className="fttext">Số điện thoại: 098.224.8922 - 024.62972174</div>
                                    <div className="fttext">Email: nhabvtv@gmail.com</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="ft-nav">
                                    <h3 className="ft-nav-text">SẢN PHẨM</h3>
                                    <div className="fttext">Đông trùng hạ thảo tươi</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="ft-nav">
                                    <h3 className= "ft-nav-text">MAIN MENU</h3>
                                    <ul className="fttext">
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
                            <div className="col-4">
                                <div className="footer-content2-4-1">
                                    <h3 className= "ft-nav-text">ĐĂNG KÝ NHẬN TIN</h3>
                                    <div className="fttext">Hãy nhập địa chỉ email của bạn vào ô dưới đây để có thể nhận được tất cả các tin tức mới nhất của Viện bảo vệ thực vật về các sản phẩm mới, các chương trình khuyến mãi mới. Chúng tôi xin đảm bảo sẽ không gửi mail rác, mail spam tới bạn.</div>
                                    <div className="ft-sub-wrapper">
                                        <div className="ft-sub-wrapper1">
                                            <Form.Control
                                                // type="password"
                                                id="inputPassword5"
                                                aria-describedby="passwordHelpBlock"
                                            />
                                            <button className="btn-pp"> <FaPaperPlane  /></button>
                                        </div>
                                        <span className="gui"> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-text">COPYRIGHTS © 2018 BY POWERED BY HARAVAN </div>
                </div>
        </div>
    </>
  )
}

export default Footer
