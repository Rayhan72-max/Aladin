import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authentication = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createUser
    }
        
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;