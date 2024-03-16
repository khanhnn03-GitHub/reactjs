import RouterHOC from "@/hoc/RouterHOC"
import Layout from "@/views/Layout"
import React, {lazy} from "react"
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom"

const Signin = lazy(() => import("@/views/Auth/Signin"))
const Welcome = lazy(() => import("@/views/Welcome"))
const City = lazy(() => import("@/views/City"))
const About = lazy(() => import("@/views/pages/About"))
const Pages = lazy(() => import("@/views/pages/Pages"))
const Pages1 = lazy(() => import("@/views/pages/Pages1"))
const Pages2 = lazy(() => import("@/views/pages/Pages2"))
const Blog = lazy(() => import("@/views/pages/Blog"))
const Collections = lazy(() => import("@/views/pages/Collections"))
const privateRoute: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Welcome/>,
            },
            {
                path: "city",
                element: <City/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "collections",
                element: <RouterHOC/>,
                children: [
                    {
                        path: "/collections",
                        element: <Collections/>,
                    },
                    {
                        path: "/collections/dong-trung-ha-thao-tuoi",
                        element: <Pages2/>,
                    },
                ],
            },
            {
                path: "blog/news",
                element: <Blog/>,
            },
            {
                path: "pages",
                element: <RouterHOC/>,
                children: [
                    {
                        path: "/pages/hinh-anh-video",
                        element: <Pages/>,
                    },
                    {
                        path: "/pages/phan-tich-kiem-nghiem",
                        element: <Pages1/>,
                    },
                ],
            },
        ],
    },
]

const rootRoute: RouteObject[] = [
    {
        path: "/",
        element: <RouterHOC/>,
        children: privateRoute,
    },
    {
        path: "auth",
        element: <RouterHOC/>,
        children: [
            {
                path: "/auth/signin",
                element: <Signin/>,
            },
            {
                path: "/auth/login",
                element: <Signin/>,
            },
        ],
    },

]

const router = createBrowserRouter(rootRoute)

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router
