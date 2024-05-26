import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ourMenu">Our Menu</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/order/salad">Order</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
        <li><Link to="/dashboard/cart" >
        <FaCartArrowDown />
            <div className="badge badge-secondary">+{cart.length}</div>
        </Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("sign Out SuccessFull")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="navbar text-white fixed z-10 bg-black bg-opacity-30 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className="btn">Log Out</button> : <Link to='/login'><button className="btn">LogIn</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;