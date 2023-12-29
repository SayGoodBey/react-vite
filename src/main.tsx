import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "./router";
import Layout from "./layout";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <Layout>
      <RouterProvider router={routers}></RouterProvider>
    </Layout>
  </RecoilRoot>

  // </React.StrictMode>
);
