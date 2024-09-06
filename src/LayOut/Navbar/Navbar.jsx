import { Link } from "react-router-dom";
import Logo from "/icons/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navOptions = <>
        <li className="text-xl font-medium"><Link to="/">Home</Link></li>
        <li className="text-xl font-medium"><Link to="/">Products</Link></li>
        <li className="text-xl font-medium"><Link to="/">Categories</Link></li>
        <li className="text-xl font-medium"><Link to="/">Custom</Link></li>
        <li className="text-xl font-medium"><Link to="/">Blog</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }

    return (
        <div className="border-b-2">
            <div className="navbar bg-base-100 py-4 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-44" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-8">
                        <Link to="/cart">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <div className="absolute -bottom-2 -right-2">
                                    <div className="bg-black flex justify-center items-center rounded-full w-6 h-6">
                                        <span className="text-white">8</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {
                            user ? <div className="flex items-center gap-6">
                                <div className="w-12 rounded-full">
                                    <img
                                        className="w-12 rounded-full"
                                        alt="img"
                                        src={user?.photoURL} />
                                </div>
                                <button onClick={handleLogOut} className="btn font-medium">LogOut</button>
                            </div>
                                :
                                <Link to="/login" className="btn font-medium">Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;