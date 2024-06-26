import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Scret from "../Components/Scret";
import PrivateRoue from "./PrivateRoue";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import Cart from "../Pages/UserDashboard/Cart/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AddItems from "../Pages/AdminDashBoard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import MangeItems from "../Pages/AdminDashBoard/MangeItems/MangeItems";
import AdminHome from "../Pages/AdminDashBoard/AdminHome/AdminHome";
import UserHome from "../Pages/UserDashboard/UserHome/UserHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
            {
                path:'/',
                element: <Home/>
            },{
               path: '/ourMenu',
               element : <OurMenu/>
            },{
              path: '/order/:category',
              element: <Order></Order>
            },{
              path: '/login',
              element: <LogIn/>
            },{
              path: '/signUp',
              element: <SignUp></SignUp>
            },{
              path: '/secret',
              element: <PrivateRoue><Scret></Scret></PrivateRoue>
            }
      ]
    },{
      path: '/dashboard',
      element: <PrivateRoue><DashBoard></DashBoard></PrivateRoue>,
      children:[
        {
          path: 'userHome',
          element: <UserHome/>
        },
        {
          path:'cart',
          element: <Cart></Cart>
        },
        //admin routes
        {
          path: 'adminHome',
          element: <AdminHome/>
        },
        {
          path: 'allUsers',
          element: <AllUsers/>
        },
        {
          path: 'addItems',
          element: <AdminRoutes><AddItems/></AdminRoutes>
        },{
          path: 'manageItems',
          element: <AdminRoutes><MangeItems/></AdminRoutes>
        }
      ]
    }
  ]);