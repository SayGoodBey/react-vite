import { Link } from "react-router-dom";
import "./index.scss";
const App = () => {
  return (
    <div className="app">
      <div className="route-item">
        <Link to="/login">登录页</Link>
      </div>
      <div className="route-item">
        <Link to="/set-password">密码修改</Link>
      </div>
      <div className="route-item">
        <Link to="/audit/log">审计日志</Link>
      </div>
      <div className="route-item">
        <Link to="/audit/setting">审计设置</Link>
      </div>
      <div className="route-item">
        <Link to="/admin">admin</Link>
      </div>
      <hr />
      <div className="route-item">
        <Link to="/recoil">recoil练习</Link>
      </div>
    </div>
  );
};

export default App;
