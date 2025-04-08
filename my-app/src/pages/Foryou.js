import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
const navigate= useNavigate();

const Foryou = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            {currentUser ? (
                <div>
                    Logged In As: {currentUser.email}
                </div>
            ) : (
                navigate('/')
            )}
        </div>
    );
};

export default Foryou;