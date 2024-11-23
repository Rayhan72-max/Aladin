import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app);
//
const Authentication = ({ children }) => {
    
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUser(user.email)
        console.log(user.email)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user.email)
    navigate("/addproduct")
    console.log("Email from Auth",user.email)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    } 

    const logout=()=>{
        return signOut(auth)
        .then(()=>{
            setUser("")
        })
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        login,
        logout
    }
        
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;