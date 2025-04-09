import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'
import { useAuth } from '../AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [NavModalOpen, setNavModalOpen] = useState(false);
  const closeNavModal = () => {
    setNavModalOpen(false);
  }
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
        // Redirect to login page or update UI as needed
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
   const { currentUser } = useAuth();

           
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link to ='/'>
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        </Link>
        <ul className="nav__list--wrapper">
          {currentUser === null ?  <><li className="nav__list nav__list--login" onClick={()=> setNavModalOpen(true)} >Login</li>
          {NavModalOpen && <Modal closeModal={closeNavModal}/>}</>: 
          <li className="nav__list nav__list--login" onClick={()=> handleLogout()}>Sign Out</li>
          }
         
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar