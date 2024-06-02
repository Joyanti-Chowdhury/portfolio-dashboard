import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home/Home/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../Components/layout/AdminLayout";

import SupplyDashboad from "../pages/Dashboard/SupplyDashboad";
import CreateSupply from "../pages/Dashboard/CreateSupply";
import Register from "../pages/Register";
import AllProjects from "../pages/Dashboard/AllProjects";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "all-relief",
       
      //   element: <AllRelief></AllRelief>,
      // },
      // {
      //   path: "all-relief-goods",
       
      //   element: <AllReliefGoodsTest></AllReliefGoodsTest>,
      // },

      // {
      //   path: "/supply/:id",
      //   element: <Supply></Supply>,
      // },

      // {
      //   path: "/about",
      //   element: <About />,
      // },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      // {
      //     index: true,
      //     element: <Navigate to='/dashboard'></Navigate>,
      // },

      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
   
      {
        path: "all-project",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "supplies",
        element: <SupplyDashboad></SupplyDashboad>
      },
      {
        path: "create-supply",
        element: <CreateSupply></CreateSupply>
      },
    ],
   
  },


  // {
  //     path: '/login',
  //     element: <Login/>
  // },
  // {
  //     path: '/register',
  //     element: <Register/>
  // },
]);

export default router;
