import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Sheared/Footer/Footer";
import NavBar from "../../Sheared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp'); 
    return (
        <div>
             <NavBar/>
             <Outlet></Outlet>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;