import "./style.scss"

const About = () => {
    return (
        <>
            <div className="header-about">
                <div className="breadcrumb-content">
                    <div className="wrapper">
                        <div className="inner-text-center">
                            <div className="breadcrumb-big">
                                <h2>GIỚI THIỆU</h2>
                            </div>
                            <div className="breadcrumb-small">
                                <a href="/" title="Quay lai trang chu">Trang chủ</a>
                                <span aria-hidden={"true"}> / </span>
                                <span>Giới thiệu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PageContainer">
                <div className="main-content">
                    <div className="collection-wrapper">
                        <div className="wrapper">
                            <div className="inner">
                                <div className="grid">
                                    <div className="grid__item-large--one-whole">
                                        <h1>GIỚI THIỆU</h1>
                                        <div className="rte">
                                            <p>Sau nhiều năm nghiên cứu tại các phòng thí nghiệm trong và ngoài nước, Tiến sỹ Phạm Văn Nhạ đã nuôi cấy thành công loài nấm Đông trùng hạ thảo trong phòng thí nghiệm, đây là công trình mang dấu ấn đậm nét của ngành nghiên cứu nước nhà và được các tạp trí nổi tiếng đánh giá cao "Dấu ấn khoa học" năm 2014.</p>
                                            <p>Với những đóng góp tạo ra dược liệu quý và có thể chủ động sản xuất được trong nước, Tiến sỹ Phạm Văn Nhạ đã được Chủ tịch nước mời tiếp kiến tại Phủ chủ tịch, Hiệp hội Doanh nghiệp nhỏ và vừa Việt Nam vinh danh "Doanh nhân tiêu biểu có nhiều đóng góp cho cộng đồng xã hội"...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<footer/>*/}
        </>
    )
}

export default About;