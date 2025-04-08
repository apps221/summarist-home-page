import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Foryou = () => {
  const navigate= useNavigate();
    const { currentUser } = useAuth();
    useEffect(()=> {
      if (!currentUser) {
        navigate('/')
      }
    }, [currentUser, navigate])

    return (
        <div>
            {currentUser && (
                <div>
                    Logged In As: {currentUser.email}
                </div>
            )}
        </div>
    );
};

export default Foryou;