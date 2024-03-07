import { authAtom } from "@/recoil/atoms/auth"
import { memo } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil"

const RouterHOC = () => {
  // B1: kiểm tra đăng nhập
  const auth = useRecoilValue(authAtom)
  // Neeus ddda dang nhap
  if (auth) return <Outlet />
  // chua dang nhap => man login
  return <Navigate to="/auth" replace={true} />
}

export default memo(RouterHOC)
