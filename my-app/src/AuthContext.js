import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebase'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
const AuthContext = createContext();
auth.languageCode = auth.useDeviceLanguage();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe; // Cleanup listener
    }, []);

    const value = {
        currentUser
    };
//if not loading then it will return the children, aka the <App>
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};