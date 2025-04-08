import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'

const Navbar = () => {
  const [NavModalOpen, setNavModalOpen] = useState(false);
  const closeNavModal = () => {
    setNavModalOpen(false);
  }

           
  return (
    <nav class="nav">
      <div class="nav__wrapper">
        <figure class="nav__img--mask">
          <img class="nav__img" src={logo} alt="logo" />
        </figure>
        <ul class="nav__list--wrapper">
          <li class="nav__list nav__list--login" onClick={()=> setNavModalOpen(true)} >Login</li>
          {NavModalOpen && <Modal closeModal={closeNavModal}/>}
          <li class="nav__list nav__list--mobile">About</li>
          <li class="nav__list nav__list--mobile">Contact</li>
          <li class="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar