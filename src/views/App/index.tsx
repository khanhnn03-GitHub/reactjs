import {App, ConfigProvider} from "antd"
import {RecoilRoot} from "recoil"
import Router from "./router"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const AppComponent = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#47A6F1",
        },
      }}
    >
      <App>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </App>
    </ConfigProvider>
  )
}

export default AppComponent
