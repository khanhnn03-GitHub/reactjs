import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"
import "./style.scss"

// const spanStyle = {
//     padding: "20px",
//     background: "#efefef",
//     color: "#000000",
// }

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",

}

const slideImages = [
    {

        url: "https://theme.hstatic.net/1000269374/1000344896/14/slideshow_1.png?v=227",

    },
    {
        url: "https://theme.hstatic.net/1000269374/1000344896/14/slideshow_3.png?v=227",

    },
    {
        url: "https://theme.hstatic.net/1000269374/1000344896/14/slideshow_4.png?v=227",

    }
];

const SlideShow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{...divStyle, "backgroundImage": `url(${slideImage.url})`}}>
                            {/*<span style={spanStyle}>{slideImage.caption}</span>*/}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideShow;