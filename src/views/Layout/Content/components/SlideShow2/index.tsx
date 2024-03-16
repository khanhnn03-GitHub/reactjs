import {Slide} from "react-slideshow-image";
import kh1 from "@/assets/images/kh1.webp";
import "react-slideshow-image/dist/styles.css"
import "./style.scss"

const spanStyle = {
    padding: "10px",
    color: "#efefef",
}

const divStyle = {
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
}

const slideImages = [
    {
        avt: kh1,
        review: "Tôi đã sưu tầm 2 bài về dấu ấn khoa học của tạp chí Y học cộng đồng và Khoa học đời sống nói về công trình của Tiến sỹ Nhạ và gửi tặng ông, kèm theo lời chân thành biết ơn TS Phạm Văn Nhạ đã cho chúng tôi - một số người cao tuổi điều kiện bình thường tiếp cận được loại dược phẩm độc đáo vẫn ước mơ xưa nay để chăm sóc thêm sức khỏe cho mình và cho các con, cháu!",
        name: 'Cụ Viễn - Sinh năm 1925, Kim Liên - Đống Đa - HN',
    }
];

const SlideShow2 = () => {
    return (
        <div className="owl-wrapper-outer" >
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className="owl-wrapper-outer1 d-flex justify-center align-items-center flex-wrap" style={{...divStyle}}>
                            <div className="w-100">
                                <img src={slideImage.avt} />
                            </div>
                            <div className="w-100">
                                <div className="textname1" style={spanStyle}>{slideImage.review}</div>
                            </div>
                            <div className="w-100">
                                <div className="textname2" style={spanStyle}>{slideImage.name}</div>
                            </div>
                            {/*<div className="w-100">*/}
                            {/*    <div className="textname1" style={spanStyle}>{slideImage.review}</div>*/}
                            {/*</div>*/}
                            {/*<div className="">*/}
                            {/*    <div className="textname1" style={spanStyle}>{slideImage.review}</div>*/}

                            {/*</div>*/}

                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideShow2;