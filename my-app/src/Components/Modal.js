import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import google from '../assets/google.png'
import { IoIosClose } from "react-icons/io";
const Modal = ({closeModal}) => {
  const [signState, setSignState] = useState('Log In')
  return (
    <div className="auth__wrapper">
    <div className="auth">
        <div className="auth__content">
          {signState==="Log In" ?
          <>
          <div className="auth__title">Log in to Summarist</div>
            <button className="btn guest__btn--wrapper">
                <figure class="google__icon--mask">
                <VscAccount />
                </figure>
                <div>Login as Guest</div>
            </button>
            <button className="btn google__btn--wrapper">
                <figure class="google__icon--mask">
                <img src={google} alt=""/>
                </figure>
                <div>Login as Google</div>
            </button>
            <form class="loginForm">
              
              <input class="mainInput" type="text" placeholder='Email Address'>
              </input>
              <input class="mainInput" type="password" placeholder='Password'>
              </input>
              <button class="btn">Login</button>
            </form><div className="forgot__password">Forgot Password?</div> 
            <div className="close__btn" onClick={closeModal}>
            <IoIosClose />
            </div>
            <div onClick = {() => {setSignState("Sign Up")}} className="signUp" >Sign Up</div></> : 
            
            <>
            <div className="auth__title">Sign Up</div>
            <button className="btn google__btn--wrapper">
            <figure class="google__icon--mask">
            <img src={google} alt=""/>
            </figure>
            <div>Sign Up With Google</div>
        </button>
          <form class="loginForm">
              
              <input class="mainInput" type="text" placeholder='Email Address'>
              </input>
              <input class="mainInput" type="password" placeholder='Password'>
              </input>
              <button class="btn">Sign Up</button>
            </form>
            <div className="close__btn" onClick={closeModal}>
            <IoIosClose />
            </div>
            <div onClick = {() => {setSignState("Log In")}} className="signUp" >Already Have An Accout?</div>
            </>
            }
          
        </div>
       
       
    </div>
    </div>
  )
}

export default Modal
