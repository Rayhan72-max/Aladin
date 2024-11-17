import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                   <NavLink to={"/"}><button className="btn btn-ghost text-xl">Aladin</button></NavLink> 
                </div>
                
                <div className="navbar-end flex gap-2">                
                   <Link active to="/addproduct"><button className='btn active:text-blue-400'>Add Product</button></Link>
                   <Link to="/signin"><button  className='btn hover:text-rose-400'>Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;