import "./style.scss"
// eslint-disable-next-line import/extensions
import {FaAngleDoubleLeft, FaAngleDoubleRight, FaCartPlus, FaSearchPlus} from "react-icons/fa";
import {Button, Collapse, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import sp4 from "@/assets/images/sp4.webp";
import Pages from "@/views/pages/Pages";
import Modal from "react-bootstrap/Modal";
const Collections = (x: string) => {
    const navigate = useNavigate()

    interface X {
        isOpen: boolean,
        text: JSX.Element,
        title: string
    }

    function onChangeForm(event: any) {
        console.log(event);
        if (event.target.checked) {
            setCheckedPrice((arr: any) => {
                arr.push(event.target.value);
                return [...arr];
            });
        } else {
            setCheckedPrice((arr: any) => {
                arr = arr.filter(a => a !== event.target.value);
                return [...arr];
            });
        }
    }
    const [open, setOpen] = useState<X[]>([
        {
            isOpen: true,
            text: <div className="panel">
                <a href="#">Đông trùng hạ thảo tươi</a>
            </div>,
            title: "DANH MỤC SẢN PHẨM",
        },
        {
            isOpen: true,
            text: <Form>
                {["checkbox"].map((type) => (
                    <div key={`default`} className="mb-3">
                        <Form.Check // prettier-ignore
                            label={`Tất cả`}
                            value={"all"}
                            name="group1"
                            onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                            label={`Nhỏ hơn 100,000₫`}
                            value={1}
                            name="group1"
                            onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 100,000₫ - 200,000₫`}
                            value={2}
                            name="group1"
                            onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 200,000₫ - 300,000₫`}
                            value={3}
                            onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                            label={`Từ 300,000₫ - 400,000₫`}
                            value={4}
                            onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                        label={`Từ 400,000₫ - 500,000₫`}
                        value={5}
                        onChange={onChangeForm}
                        />
                        <Form.Check // prettier-ignore
                        label={` Lớn hơn 500,000₫`}
                        value={6}
                        onChange={onChangeForm}
                        />
                    </div>
                ))}
            </Form>,
            title: "KHOẢNG GIÁ",
        },
        {
            isOpen: true,
            text: <div className="pane-sidebar-sort">
                <div className="no-bullets-filter-price">
                    <Form>
                        {["checkbox"].map((type) => (
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

    let a = 0;

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
        // if (variable > 3) {
        // console.log('variable > 3');
        // setVariable(variable - 1);
        // }
        setOpen((o:any) => {
            o[index].isOpen = !o[index].isOpen;
            return [].concat(o);
        })
    }
    // const [open, setOpen] = useState();
    interface a {
        number: string;
    }

    interface Product {
        link: string,
        title: string,
        price: string,
        priceNumber: number,
    }

    const products: Product[] = [
        {
            link: sp4,
            title: "SKT1",
            price: "300,000₫",
            priceNumber: 100,
        }, {
            link: sp4,
            title: "YSKT2",
            price: "300,000₫",
            priceNumber: 100,
        }, {
            link: sp4,
            title: "ZSKT3 > 100",
            price: "300,000₫",
            priceNumber: 101,
        }, {
            link: sp4,
            title: "DSKT4",
            price: "300,000₫",
            priceNumber: 100,
        }, {
            link: sp4,
            title: "CSKT",
            price: "300,000₫",
            priceNumber: 100,
        },
        {
            link: sp4,
            title: "SKT < 100",
            price: "300,000₫",
            priceNumber: 99,
        },
        {
            link: sp4,
            title: "BSKT",
            price: "300,000₫",
            priceNumber: 100,
        },
        {
            link: sp4,
            title: "ASKT",
            price: "300,000₫",
            priceNumber: 100,
        },
    ]

    const [productFilter, setProductFilter] = useState<Product[]>(products)
    const [pages, setPages] = useState<a[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    // sản phẩm hiện ra khi click vào page
    const [productPerPage, setProductPerPage] = useState<Product[]>([]);
    const [size, setSize] = useState<number>(0);
    const [checkedPrice, setCheckedPrice] = useState<any>([])



    useEffect(() => {
        console.log(checkedPrice);
        setProductFilter(p => {
            console.log(checkedPrice);
            // TODO sửa lại câu điều kiện
            if (checkedPrice.includes("all")) return products;
            if (checkedPrice.includes("1")) return products.filter(p => p.priceNumber < 100);
            if (checkedPrice.includes("2")) return products.filter(p => p.priceNumber > 100 && p.priceNumber < 200);
            if (checkedPrice.includes("3")) return products.filter(p => p.priceNumber > 200 && p.priceNumber < 300);
            if (checkedPrice.includes("4")) return products.filter(p => p.priceNumber < 100);
            if (checkedPrice.includes("5")) return products.filter(p => p.priceNumber < 100);
            if (checkedPrice.includes("6")) return products.filter(p => p.priceNumber < 100);
            return products;
        })
    }, [checkedPrice])


    useEffect(() => {
        console.log(productFilter);
        setCurrentPage(1);
        if (productFilter.length % sizePerPage === 0) {
            setSize(productFilter.length / sizePerPage);
        } else {
            setSize(Math.floor(productFilter.length / sizePerPage) + 1);
        }
    }, [productFilter])

    useEffect(() => {
        console.log(size);
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push({number: String(i + 1)});
        }
        setPages([...arr]);
    }, [size])

    const sizePerPage = 2;
    // const size = products.length % sizePerPage === 0 ? products.length/ sizePerPage : Math.floor(products.length/ sizePerPage)  + 1;

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log(setCurrentPage);
        }
    };

    const handlePageChange = (page: a) => {
        console.log(page);
        setCurrentPage(Number(page.number));
    };

    useEffect(() => {
        console.log("currentPage change");
        setProductPerPage(productFilter.slice((currentPage - 1) * sizePerPage, (currentPage - 1) * sizePerPage + sizePerPage));
    }, [currentPage, productFilter])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
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
                                            <div>
                                                {open.map((o, index) => (
                                                    <div key={index} className="collection1"
                                                         style={{marginBottom: "30px"}}>
                                                        <Button style={{
                                                            background: "#5b0e0e",
                                                            borderColor: "#5b0e0e",
                                                            borderRadius: "var(--0)",
                                                            width: "100%",
                                                            fontWeight: "bold",
                                                        }}
                                                                onClick={() => setCollapseExpand(index)}
                                                                aria-controls="example-collapse-text"
                                                                aria-expanded={o.isOpen}
                                                        >
                                                            {o.title}
                                                        </Button>
                                                        <Collapse in={o.isOpen}>
                                                            <div id="example-collapse-text">
                                                                {o.text}
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="collection-content-wrapper">
                                            <div className="collection-head">
                                                <div className="title-clt">
                                                    <div className="title-clt1">
                                                        <div className="collection-title">
                                                            <h5 style={{fontWeight: "bold"}}>TẤT CẢ SẢN PHẨM</h5>
                                                        </div>
                                                    </div>
                                                    <div className="title-clt2">
                                                        <div className="collection-sorting-wrapper">
                                                            <div className="title-clt3">Sắp xếp
                                                                <select name="" id="" style={{padding: "10px 0px 10px 10px", border: "1px solid #e6e6e6"}}>
                                                                    <option value="">Mới nhất</option>
                                                                    <option value="">Sản phẩm bán chạy</option>
                                                                    <option value="" >Theo bảng chữ cái từ A-Z</option>
                                                                    <option value="" >Theo bảng chữ cái từ Z-A</option>
                                                                    <option value="">Giá từ thấp tới cao</option>
                                                                    <option value="">Giá từ cao tới thấp</option>
                                                                    <option value="">Cũ nhất</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-body">
                                                <div className="row">
                                                    {
                                                        productPerPage.map((product, index) => (
                                                            <div className="col-md-4" key={index}>
                                                                <div className="product-item">
                                                                    <div className="product-img" style={{
                                                                        position: "relative",
                                                                        overflow: "hidden",
                                                                    }}>
                                                                        <a href="#">
                                                                            <img src={product.link}
                                                                                 style={{maxWidth: "100%"}}/>
                                                                        </a>
                                                                        <div className="product-actions">
                                                                            <Button variant="primary" onClick={handleShow} >
                                                                            <span className="icon1" style={{
                                                                                textAlign: "center",
                                                                                position: "absolute",
                                                                                bottom: "10px",
                                                                                left: "-10%",
                                                                                transition: "all 0.3s",
                                                                            }}> <FaSearchPlus/>  </span>
                                                                            </Button>
                                                                            <button className="btn-product-actions"
                                                                                    style={{
                                                                                        position: "absolute",
                                                                                        bottom: "-130%",
                                                                                        left: "37%",
                                                                                        transition: "all 0.3s",
                                                                                    }}>
                                                                                <span>MUA NGAY</span>
                                                                            </button>
                                                                            <span className="icon2" style={{
                                                                                textAlign: "center",
                                                                                position: "absolute",
                                                                                bottom: "10px",
                                                                                right: "-40px",
                                                                                transition: "all 0.3s",
                                                                            }}> <FaCartPlus/> </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-title">
                                                                        <a href="#">{product.title}</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span
                                                                            className="current-price">{product.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="pagination">
                                                    <div className="pagination-item" style={{display: "flex"}}>
                                                        <a className="pagination-item-1"
                                                           onClick={handlePreviousPage} aria-disabled={currentPage < 1}>
                                                            <FaAngleDoubleLeft/>
                                                        </a>
                                                        {
                                                            pages.map((page, index) => (
                                                                <div key={index}
                                                                     className= "pagination-item-1" onClick={() => handlePageChange(page)}>
                                                                    <a  className={index === currentPage-1? "active-page" :""}
                                                                       onClick={() => handlePageChange(page)}>{page.number}</a>
                                                                </div>
                                                            ))
                                                        }
                                                        <a className="pagination-item-1" onClick={handleNextPage} aria-disabled={currentPage >= 4}>
                                                            <FaAngleDoubleRight/>
                                                        </a>
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