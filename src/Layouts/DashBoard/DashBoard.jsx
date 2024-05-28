import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCartShopping} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const DashBoard = () => {
    const [cart,] = useCart();
    //TODO: get isAdmin value  from the data base
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="min-h-screen w-64 bg-orange-400 ">
                <ul className="menu space-y-5">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'
                                    className='text-center'
                                ><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'
                                    className='text-center'
                                ><FaUtensils />ADD ITEMS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'
                                    className='text-center'
                                ><FaList/>MANAGE ITEMS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'
                                    className='text-center'
                                ><FaBook />MANAGE BOOKINGS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUsers'
                                    className='text-center'
                                ><FaUsers />ALL USERS</NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to='/dashboard/userHome'
                                    className='text-center'
                                ><FaHome />User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'
                                    className='text-center'
                                ><FaCalendar />Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'
                                    className='text-center'
                                ><FaCartShopping></FaCartShopping>My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'
                                    className='text-center'
                                ><FaAd />ReView</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'
                                    className='text-center'
                                ><FaList />Bookings</NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* sheared link */}
                    <li>
                        <NavLink to='/'
                            className='text-center'
                        ><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ourMenu'
                            className='text-center'
                        ><FaList />Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'
                            className='text-center'
                        ><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;