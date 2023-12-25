import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "./router";
import Layout from "./layout";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Layout>
    <RouterProvider router={routers}></RouterProvider>
  </Layout>

  // </React.StrictMode>
);
