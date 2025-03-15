import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { Link, NavLink, useLocation } from "react-router-dom";


const Navbar = () => {

    const link = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold underline underline-offset-4' : ''} ><li>Home</li></NavLink>
        <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'font-bold underline underline-offset-4 text-[#9538E2]' : ''}><li>Statistics</li></NavLink>
        <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'font-bold underline underline-offset-4 text-[#9538E2]' : ''}><li>Dashboard</li></NavLink>
    </>

    const { pathname } = useLocation();


    return (

        <div className={`max-w-[1540px] mx-auto  md:pt-8  border-8 border-b-0 border-[#F6F6F6] rounded-4xl rounded-b-none
        ${pathname !== '/' ? 'bg-white border-0 rounded-none max-w-full' : 'bg-[#9538E2]'}`}>
            <div className="max-w-7xl mx-auto ">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-4 space-y-2 shadow">
                                {link}
                            </ul>
                        </div>
                        <Link to={'/'}><h1 className={`text-xl font-bold 
                            ${pathname === '/' ? 'text-[#FFFFFF] ' : 'text-black'}`}>Gadget Heaven</h1></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className={`menu menu-horizontal px-1 font-medium text-base space-x-10
                            ${pathname === '/' ? 'text-[#FFFFFF] ' : 'text-black'}`}>
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-5">
                        <Link to={'/dashboard'}> <button className="p-3 border border-[#0B0B0B1A] rounded-full bg-white"><HiOutlineShoppingCart /> </button></Link>
                        <Link to={'/dashboard'}> <button className="p-3 border border-[#0B0B0B1A] rounded-full bg-white"><LuHeart /> </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;