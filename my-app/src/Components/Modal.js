import React, { useEffect, useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import google from '../assets/google.png'
import { IoIosClose } from "react-icons/io";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInAnonymously, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { provider } from '../AuthContext';

//Email: guest@gmail.com
//Password: guest123

const Modal = ({closeModal}) => {
  const [signState, setSignState] = useState('Log In')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate= useNavigate();
  const {currentUser} = useAuth();

 const signInGuest = async () => {
  signInAnonymously (auth)
  .then(() => {
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });  
}
   
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('Google Sign In Success:', result.user);
      console.log("Token: ", token)
    } catch (error) {
      console.error('Google Sign In Error:', error.message);
      alert('Google Sign In Failed: ' + error.message);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    
    }).catch((error) => {
      console.log(error)
      const errorMessage = error.message;
        console.log(errorMessage);
        alert("Error Signing In: " + errorMessage);
    })
  }
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
       
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Error creating user: " + errorMessage);

      });
  };
  useEffect(()=> {
    if (currentUser) {
      navigate('/for-you')
    }
  }, [currentUser, navigate])
  return (
    <div className="auth__wrapper">
    <div className="auth">
        <div className="auth__content">
        <div className="close__btn" onClick={closeModal}>
            <IoIosClose />
            </div>
          {signState==="Log In" ?
          <>
          <div className="auth__title">Log in to Summarist</div>
            <button onClick={signInGuest} className="btn guest__btn--wrapper">
                <figure class="google__icon--mask">
                <VscAccount />
                </figure>
                <div>Login as Guest</div>
            </button>
            <button onClick={signInWithGoogle} className="btn google__btn--wrapper">
                <figure class="google__icon--mask">
                <img src={google} alt=""/>
                </figure>
                <div>Login as Google</div>
            </button>
            <form onSubmit={signIn} class="loginForm">
              
              <input class="mainInput" type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}>
              </input>
              <input class="mainInput" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}>
              </input>
              <button type="submit" class="btn">Login</button>
            </form><div className="forgot__password">Forgot Password?</div> 
            <div onClick = {() => {setSignState("Sign Up")}} className="signUp" >Sign Up</div></> : 
            
            <>
            <div className="auth__title">Sign Up</div>
            <button className="btn google__btn--wrapper">
            <figure class="google__icon--mask">
            <img src={google} alt=""/>
            </figure>
            <div>Sign Up With Google</div>
        </button>
          <form onSubmit={signUp} class="loginForm">
              
              <input class="mainInput" type="text" placeholder='Email Address'value = {email} onChange={(e)=> setEmail(e.target.value)}>
              </input>
              <input class="mainInput" type="password" placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)}>
              </input>
              <button type="submit"class="btn">Sign Up</button>
            </form>
            <div onClick = {() => {setSignState("Log In")}} className="signUp" >Already Have An Accout?</div>
            </>
            }
          
        </div>
       
       
    </div>
    </div>
  )
}

export default Modal
