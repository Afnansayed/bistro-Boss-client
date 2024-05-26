import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Scret from "../Components/Scret";
import PrivateRoue from "./PrivateRoue";

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
    },
  ]);