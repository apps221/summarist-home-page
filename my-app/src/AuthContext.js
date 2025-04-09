import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebase'; 
import { onAuthStateChanged, GoogleAuthProvider, getAuth } from 'firebase/auth';




const AuthContext = createContext();

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