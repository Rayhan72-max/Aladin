import React, { useContext } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication';
import Swal from 'sweetalert2';
import { AiOutlineMenu } from "react-icons/ai";
import Signin from '../shared/Signin';
const Navbar = (props) => {
    const navigate = useNavigate()
    const { user, logout, setUser } = useContext(AuthContext)
    console.log("user is", user)
    const handleAddproduct = () => {
        if (user == "") {
            navigate("/signup")
            Swal.fire("Login or SignUp First");
        } else {
            navigate("/addproduct")
        }
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <NavLink to={"/"}><button className="btn btn-ghost text-xl">Aladin</button></NavLink>
                </div>

                <div className="navbar-end flex gap-2">
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
                            className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 shadow">
                            <li><button onClick={handleAddproduct}>Add Product</button></li>
                           <li>{user !== "" ? <button onClick={() => logout()}>Logout</button> : <Link to="/signin"><button>Login</button></Link>}</li>

                        </ul>
                    </div>
                    <button onClick={handleAddproduct} className='hidden lg:btn active:text-blue-400'>Add Product</button>
                    {user !== "" ? <button className='hidden lg:btn' onClick={() => logout()}>Logout</button> : <Link to="/signin"><button className='hidden lg:btn hover:text-rose-400'>Login</button></Link>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;