import { ReactNode } from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

import "./index.scss";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: "#009265",
          borderRadius: 2,
        },
      }}
    >
      <div className="layout">{children}</div>
    </ConfigProvider>
  );
};
export default Layout;
