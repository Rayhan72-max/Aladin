import React, { useContext } from 'react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication';

const Signin = (props) => {
    const navigation = useNavigate()
    const {login} = useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault() 
        const password= e.target.password.value;
        const email= e.target.email.value;
        const user = {password,email}
        login(email,password)
        .then(()=>{
            navigation("/addproduct")
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                                <Link className='btn btn-primary mt-2' to="/signup"><button >SignUp</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;