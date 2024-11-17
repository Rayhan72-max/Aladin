import React, { useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../Authentication';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Signup = (props) => {
        
    
    const users = useLoaderData() 
    const emails = users.map(e=>e.email)
    
    const {createUser} = useContext(AuthContext)

    const handleSignUp=(e)=>{
        e.preventDefault()
        
         const name= e.target.name.value;
         const address= e.target.address.value;
         const phone= e.target.phone.value;
         const password= e.target.password.value;
         const email= e.target.email.value;
        
        const user = {name,address,phone,password,email}

        

        /* fetch("https://aladin-ashy.vercel.app/user",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data=>{console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } ) */
        if(emails.includes(email)){
            console.log("User already exist")
        }else{
            fetch("https://aladin-ashy.vercel.app/user",{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user) 
            })
            .then(res => res.json())
            .then(data=>{console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            } )
            createUser(email,password)
        }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;