import { createBrowserRouter } from "react-router-dom";
import Login from "@/page/login";
import App from "@/App";
import Log from "@/page/audit/log";
import Setting from "@/page/audit/setting";
import Password from "@/page/login/Password";
import Admin from "@/layout/admin";
import Recoil from "@/page/recoil";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/set-password",
    element: <Password />,
  },
  {
    path: "/audit",
    children: [
      {
        path: "log",
        element: <Log />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/recoil",
    element: <Recoil />,
  },
]);

export default routers;
