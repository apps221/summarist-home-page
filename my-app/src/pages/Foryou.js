import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


const Foryou = () => {
  
  const navigate= useNavigate();
    const { currentUser } = useAuth();
  console.log(currentUser);
    useEffect(()=> {
      if (!currentUser) {
        navigate('/')
      }
    }, [currentUser, navigate])

    return (
        <div>
            {currentUser && (
                <div className='loggedInAs'>
                  Logged In As: {currentUser.email || "Guest"}
                </div>
            )}
        </div>
    );
};

export default Foryou;