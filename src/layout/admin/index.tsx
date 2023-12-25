import "./index.scss";
import Log from "@/page/audit/log";
import Setting from "@/page/audit/setting";
import { useState } from "react";

const Admin = () => {
  const activeKey = 1;
  const routerName = "系统设置";
  const [navLeftListActive, setNavLeftListActive] = useState(3);
  const navList = [
    "首页",
    "系统",
    "学校管理",
    "平台配置管理",
    "云盘管理",
    "客户端管理",
  ];
  const navLeftList = [
    {
      name: "管理应用程序",
      ele: <div>无</div>,
    },
    {
      name: "系统用户管理",
      ele: <div>无</div>,
    },
    {
      name: "系统用户组管理",
      ele: <div>无</div>,
    },
    {
      name: "审计日志",
      ele: <Log />,
    },
    {
      name: "审计日志设置",
      ele: <Setting />,
    },
  ];

  return (
    <div className="admin-container">
      <div className="header">
        <div className="header-left">
          <img src="https://zxjs14.eeo.im//eeos_admin/images/logo.gif" alt="" />
        </div>
        <div className="header-right">
          <ul className="nav-top">
            {navList.map((item, index) => (
              <li key={index} className={activeKey === index ? "active" : ""}>
                {item}
              </li>
            ))}
          </ul>
          <div className="nav-bottom">
            <div className="nav-bottom-content">
              <span>首页</span>
              <em>»</em>
              <span>系统设置</span>
              <em>»</em>
              <span>{routerName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-left">
          {navLeftList.map((item, index) => (
            <div
              key={index}
              className={`left-nav-item ${
                navLeftListActive === index ? "nav-active" : ""
              }`}
              onClick={() => setNavLeftListActive(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="main-right">{navLeftList[navLeftListActive].ele}</div>
      </div>
      <div className="uinfo">
        <p>
          您好, <em style={{ fontWeight: "bold" }}>前端</em>&nbsp; [{" "}
          <a href="./action/user/editpasswd.php" target="_blank">
            修改密码
          </a>{" "}
          ] [{" "}
          <a href="loginout.php" target="_top">
            退出
          </a>{" "}
          ]
        </p>
        <p className="btnlink">
          <a href="http://www.eeo.cn/" target="_blank" rel="noreferrer">
            网站首页
          </a>
        </p>
      </div>
    </div>
  );
};
export default Admin;
