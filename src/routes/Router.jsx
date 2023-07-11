import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>This is 404 page</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
