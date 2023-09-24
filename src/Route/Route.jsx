import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default MyRouter;
