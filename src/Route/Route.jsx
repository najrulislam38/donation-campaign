import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donations/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
      // {
      //   path: "/donations/:id",
      //   element: <DonationDetails></DonationDetails>,
      //   loader: () => fetch("data.json"),
      // },
    ],
  },
]);

export default MyRouter;
