import { LoadingFallback } from "@/components/Loading"
import { atomContainerScroll } from "@/recoil/atoms/config"
import { Layout } from "antd"
import { MacScrollbar } from "mac-scrollbar"
import { Ref, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import Sider from "@/views/Layout/Sider";
import React, { useState, useEffect } from 'react';
import slideshow_1 from "../Content/slideshow_1.png"
import slideshow_3 from "../Content/slideshow_3.webp"
import slideshow_4 from "../Content/slideshow_4.webp"
import './style.scss'

const Content = () => {






    return (
    <>
        <div className="content">
            <div className="main-slider">
                <div className="main-slider1">
                    <a className="collection">
                      <div>

                          <img src={slideshow_1}/>
                          <img src={slideshow_3}/>
                          <img src={slideshow_4}/>
                      </div>
                    </a>
                </div>
                <div className="slogan-text-center">HÃY DÀNH NHỮNG GÌ TỐT ĐẸP NHẤT CHO NGƯỜI THÂN CỦA BẠN</div>

            </div>

            <div className="page-container">
                <div className="page-container-main">
                    <div className="home-collection">
                        <div className="wrapper">
                            <div className="inner">
                                <h2 className="section-title text-center">SẢN PHẨM NỔI BẬT</h2>
                                <div className="hc-tabs-wrapper">
                                    <div className="tab-text-center">Sản phẩm nổi bật</div>
                                    <div className="hc-tabcontent">
                                        <div className="grid-uniform">
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-quarter-medium--one-third-small--one-half">
                                                <div className="product-item">
                                                    <div className="product-img"></div>
                                                    <div className="product-title"></div>
                                                    <div className="product-price-clearfix"></div>
                                                </div>
                                            </div>
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
                                <div className="grid">
                                    <div className="grid__item-large--one-third-medium--one-whole-small--one-whole-hqu-left">
                                        <div className="grid">
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole"></div>
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole"></div>
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole"></div>
                                        </div>
                                    </div>

                                    <div className="grid__item-large--one-third-medium--one-whole-small--one-whole">
                                        <div className="hqu-center-img-text-center"></div>
                                    </div>

                                    <div className="grid__item-large--one-third-medium--one-whole-small--one-whole-hqu-right">
                                        <div className="grid">
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                <div className="hqu-item-clearfix">
                                                    <div className="hqu-img"></div>
                                                    <div className="hqu-content-text-left">
                                                        <div className="hqu-title">ĐỐI VỚI PHỤ NỮ VÀ TRẺ EM</div>
                                                        <div className="hqu-desc">có tác dụng làm đẹp da, chống lão hóa, ngăn ngừa nếp nhăn, tăng sức đề kháng và bồi bổ toàn diện cho sức khỏe của các mẹ và bé.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                <div className="hqu-item-clearfix">
                                                    <div className="hqu-img"></div>
                                                    <div className="hqu-content-text-left">
                                                        <div className="hqu-title">ĐỐI VỚI NAM GIỚI</div>
                                                        <div className="hqu-desc">giúp tăng cường chức năng sinh lý cho nam giới, hạn chế hiện tượng xuất tinh sớm.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid__item-large--one-whole-medium--one-third-small--one-whole">
                                                <div className="hqu-item-clearfix">
                                                    <div className="hqu-img"></div>
                                                    <div className="hqu-content-text-left">
                                                        <div className="hqu-title">ĐỐI VỚI NGƯỜI CAO TUỔI</div>
                                                        <div className="hqu-desc">giúp tăng sức đề kháng, tăng cường hệ miễn dịch, làm giảm cholesterol trong máu và chống xơ vữa động mạch.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-gallery1"></div>
                    <div className="home-testimonials"></div>
                    <div className="home-articles"></div>
                    <div className="home-contact"></div>
                </div>
            </div>
        </div>
    </>
  )
}


export default Content
