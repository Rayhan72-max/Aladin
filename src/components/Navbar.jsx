import React, { useContext } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication';
import Swal from 'sweetalert2';
import Signin from '../shared/Signin';
const Navbar = (props) => {
    const navigate = useNavigate()
    const {user,logout,setUser} = useContext(AuthContext)
    console.log("user is", user)
    const handleAddproduct = () =>{
            if(user==""){
            navigate("/signup")
            Swal.fire("Login or SignUp First"); 
            }else{
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
                                   
                   <button onClick={handleAddproduct} className='btn active:text-blue-400'>Add Product</button>
                   {user!==""? <button onClick={()=>logout()}>Logout</button> : <Link to="/signin"><button className='btn hover:text-rose-400'>Login</button></Link> }
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;