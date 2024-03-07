import {Layout} from "antd"
import {memo} from "react"
import Content from "./Content"
import Footer from "./Footer"
import Sider from "./Sider"
import Header from "@/views/Layout/Header";

const LayoutComponent = () => {
    return (
        <Layout className="h-screen bg-white">
            {/*<Sider />*/}
            <Layout>
                <Header/>
                <Content/>

                <Footer/>
            </Layout>
        </Layout>
    )
}

export default memo(LayoutComponent)
