import "./style.scss"
// eslint-disable-next-line import/extensions
import box1 from "@/assets/images/box1.jpg";
import { FaSearchPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import {Button, Collapse, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import sp5 from "@/assets/images/sp5.webp";
const Collections = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState<any[]>([
        {
            isOpen: false,
            text:   <div className="panel" >
                        <a href="#">Đông trùng hạ thảo tươi</a>
                    </div>,
            title: "DANH MỤC SẢN PHẨM",
        },
        {
            isOpen: false,
            text: <Form>
                {['checkbox'].map((type) => (
                    <div key={`default`} className="mb-3">
                        <Form.Check // prettier-ignore
                            label={`Tất cả`}
                        />
                        <Form.Check // prettier-ignore
                            label={`Nhỏ hơn 100,000₫`}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 100,000₫ - 200,000₫`}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 200,000₫ - 300,000₫`}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 300,000₫ - 400,000₫`}
                        /><Form.Check // prettier-ignore
                            label={`Từ 400,000₫ - 500,000₫`}
                        /><Form.Check // prettier-ignore
                            label={` Lớn hơn 500,000₫`}
                        />
                    </div>
                ))}
            </Form>,
            title: "KHOẢNG GIÁ",
        },
        {
            isOpen: false,
            text: <div className="pane-sidebar-sort">
                <div className="no-bullets-filter-price">
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`default`} className="mb-3">
                                <Form.Check // prettier-ignore
                                    label={`VIMH`}
                                />
                                <Form.Check // prettier-ignore
                                    label={`Khác`}
                                />
                            </div>
                        ))}
                    </Form>
                </div>
            </div>,
            title: "THƯƠNG HIỆU",
        },
    ]);

    let a =0;

    const [variable, setVariable] = useState(1);
    useEffect(() => {
        console.log("variable change" + variable);
        // if (variable > 3) {
        //     console.log('variable > 3');
        //     // setVariable(variable - 1);
        // }
    }, [open, variable])

    const setCollapseExpand = (index: number) => {
        // setVariable(variable+1);
        if (variable > 3) {
            // console.log('variable > 3');
            // setVariable(variable - 1);
        }
        setOpen((o) => {
            o[index].isOpen = !o[index].isOpen;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return [].concat(o);
        })
    }
    return(
        <>
            <div className="header-collections">
                <div className="breadcrumb-content">
                    <div className="wrapper">
                        <div className="inner-text-center">
                            <div className="breadcrumb-big">
                                <h3>TẤT CẢ SẢN PHẨM</h3>
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
                    <div className="page-wrapper">
                        <div className="wrapper">
                            <div className="inner">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="collection-sidebar-wrapper">
                                            <div >
                                                {open.map((o, index) => (
                                                    <div key={index} className="collection1" style={{marginBottom: "30px"}}>
                                                        <Button style={{background: "#5b0e0e", borderColor: "#5b0e0e", borderRadius: "var(--0)", width: "100%", fontWeight:"bold"}}
                                                            onClick={() => setCollapseExpand(index)}
                                                            aria-controls="example-collapse-text"
                                                            aria-expanded={o.isOpen}
                                                        >
                                                            {o.title}
                                                        </Button>
                                                        <Collapse in={o.isOpen}>
                                                            <div id="example-collapse-text" >
                                                                {o.text}
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-9" >
                                        <div className="collection-content-wrapper">
                                            <div className="collection-head">
                                                <div className="title-clt">
                                                    <div className="title-clt1">
                                                        <div className="collection-title">
                                                            <h5 style={{fontWeight:"bold"}}>TẤT CẢ SẢN PHẨM</h5>
                                                        </div>
                                                    </div>
                                                    <div className="title-clt2">
                                                        <div className="collection-sorting-wrapper">
                                                            <div className="title-clt3">Sắp xếp </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="row">

                                                    <div className="col-md-4">
                                                        <div className="product-item">
                                                            <div className="product-img" style={{position: "relative",overflow: "hidden"}}>
                                                                <a href="#">
                                                                    <img src={sp5} style={{maxWidth: "100%"}}/>
                                                                </a>
                                                                <div className="product-actions" >
                                                                    <span className="icon1" style={{textAlign:"center", position: "absolute",bottom: "10px",left: "-10%",transition: "all 0.3s"}}> <FaSearchPlus />  </span>
                                                                    <button className="btn-product-actions" style={{position: "absolute", bottom: "-15%",left: "37%",transition: "all 0.3s"}}>
                                                                        <span>MUA NGAY</span>
                                                                    </button>
                                                                    <span className="icon2" style={{textAlign:"center", position: "absolute",bottom: "10px",right: "-40px",transition: "all 0.3s"}}> <FaCartPlus /> </span>
                                                                </div>
                                                            </div>
                                                            <div className="product-title">
                                                                <a href="#">SKT</a>
                                                            </div>
                                                            <div className="product-price">
                                                                <span className="current-price">300,000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="product-item">
                                                            <div className="product-img" style={{position: "relative",overflow: "hidden"}}>
                                                                <a href="#">
                                                                    <img src={sp5} style={{maxWidth: "100%"}}/>
                                                                </a>
                                                                <div className="product-actions" >
                                                                    <span className="icon1" style={{textAlign:"center", position: "absolute",bottom: "10px",left: "-10%",transition: "all 0.3s"}}> <FaSearchPlus />  </span>
                                                                    <button className="btn-product-actions" style={{position: "absolute", bottom: "-15%",left: "37%",transition: "all 0.3s"}}>
                                                                        <span>MUA NGAY</span>
                                                                    </button>
                                                                    <span className="icon2" style={{textAlign:"center", position: "absolute",bottom: "10px",right: "-40px",transition: "all 0.3s"}}> <FaCartPlus /> </span>
                                                                </div>
                                                            </div>
                                                            <div className="product-title">
                                                                <a href="#">SKT</a>
                                                            </div>
                                                            <div className="product-price">
                                                                <span className="current-price">300,000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="product-item">
                                                            <div className="product-img" style={{position: "relative",overflow: "hidden"}}>
                                                                <a href="#">
                                                                    <img src={sp5} style={{maxWidth: "100%"}}/>
                                                                </a>
                                                                <div className="product-actions" >
                                                                    <span className="icon1" style={{textAlign:"center", position: "absolute",bottom: "10px",left: "-10%",transition: "all 0.3s"}}> <FaSearchPlus />  </span>
                                                                    <button className="btn-product-actions" style={{position: "absolute", bottom: "-15%",left: "37%",transition: "all 0.3s"}}>
                                                                        <span>MUA NGAY</span>
                                                                    </button>
                                                                    <span className="icon2" style={{textAlign:"center", position: "absolute",bottom: "10px",right: "-40px",transition: "all 0.3s"}}> <FaCartPlus /> </span>
                                                                </div>
                                                            </div>
                                                            <div className="product-title">
                                                                <a href="#">SKT</a>
                                                            </div>
                                                            <div className="product-price">
                                                                <span className="current-price">300,000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="product-item">
                                                            <div className="product-img" style={{position: "relative",overflow: "hidden"}}>
                                                                <a href="#">
                                                                    <img src={sp5} style={{maxWidth: "100%"}}/>
                                                                </a>
                                                                <div className="product-actions" >
                                                                    <span className="icon1" style={{textAlign:"center", position: "absolute",bottom: "10px",left: "-10%",transition: "all 0.3s"}}> <FaSearchPlus />  </span>
                                                                    <button className="btn-product-actions" style={{position: "absolute", bottom: "-15%",left: "37%",transition: "all 0.3s"}}>
                                                                        <span>MUA NGAY</span>
                                                                    </button>
                                                                    <span className="icon2" style={{textAlign:"center", position: "absolute",bottom: "10px",right: "-40px",transition: "all 0.3s"}}> <FaCartPlus /> </span>
                                                                </div>
                                                            </div>
                                                            <div className="product-title">
                                                                <a href="#">SKT</a>
                                                            </div>
                                                            <div className="product-price">
                                                                <span className="current-price">300,000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="product-item">
                                                            <div className="product-img" style={{position: "relative",overflow: "hidden"}}>
                                                                <a href="#">
                                                                    <img src={sp5} style={{maxWidth: "100%"}}/>
                                                                </a>
                                                                <div className="product-actions" >
                                                                    <span className="icon1" style={{textAlign:"center", position: "absolute",bottom: "10px",left: "-10%",transition: "all 0.3s"}}> <FaSearchPlus />  </span>
                                                                    <button className="btn-product-actions" style={{position: "absolute", bottom: "-15%",left: "37%",transition: "all 0.3s"}}>
                                                                        <span>MUA NGAY</span>
                                                                    </button>
                                                                    <span className="icon2" style={{textAlign:"center", position: "absolute",bottom: "10px",right: "-40px",transition: "all 0.3s"}}> <FaCartPlus /> </span>
                                                                </div>
                                                            </div>
                                                            <div className="product-title">
                                                                <a href="#">SKT</a>
                                                            </div>
                                                            <div className="product-price">
                                                                <span className="current-price">300,000₫</span>
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
                </div>
            </div>
        </>
    )

}



export default Collections;