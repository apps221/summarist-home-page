import React from 'react'
import { useAuth } from '../AuthContext';



const Foryou = () => {
  const user = useAuth();
   console.log(user)
  return (
    <div>
    Logged In As: {user}
    </div>
  )
}

export default Foryou