import {Layout} from "antd"
import React, {memo, Ref} from "react"
import Content from "./Content"
import Footer from "./Footer"
import Sider from "./Sider"
import Header from "@/views/Layout/Header";
import {MacScrollbar} from "mac-scrollbar";
import {useSetRecoilState} from "recoil";
import {atomContainerScroll} from "@/recoil/atoms/config";

// eslint-disable-next-line import/extensions

const LayoutComponent = () => {
    const setContainerScroll = useSetRecoilState(atomContainerScroll)
    return (
        <Layout className="bg-white d-block">
            {/*<Sider />*/}
            {/*<Layout>*/}
            <MacScrollbar
                className="h-screen overflow-x-hidden relative bg-white"
                trackStyle={() => ({
                    background: "transparent",
                    borderLeft: "none",
                })}
                ref={setContainerScroll as Ref<HTMLElement> | undefined}
            >
                <Header/>
                <Content/>
                <Footer/>
            </MacScrollbar>
            {/*</Layout>*/}
        </Layout>
    )
}

export default memo(LayoutComponent)
