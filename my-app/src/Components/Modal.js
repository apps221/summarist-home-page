import React from 'react'
import { VscAccount } from "react-icons/vsc";
const Modal = () => {
  return (
    <div className="auth__wrapper">
    <div className="auth">
        <div className="auth__content">
            <div className="auth__title">Log in to Summarist</div>
            <button className="btn guest__btn--wrapper">
                <figure class="google__icon--mask guest__icon--mask">
                <VscAccount />
                </figure>
               
                <div>Login as Guest</div>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Modal
