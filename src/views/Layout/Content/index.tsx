import React, {Ref, Suspense} from "react"
import "./style.scss"
import {Outlet} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {MacScrollbar} from "mac-scrollbar";
import {atomContainerScroll} from "@/recoil/atoms/config";
import {LoadingFallback} from "@/components/Loading";
import { Layout } from "antd"

const Content = () => {

    return (

            <Layout.Content className="px-5 pt-10">
                <Suspense fallback={<LoadingFallback />}>
                    <Outlet />
                </Suspense>
            </Layout.Content>
    )
}

export default Content
