// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Nas5TOgkNdi4B8jSxhKNQ1pQn_QNa9c",
  authDomain: "summarist-80da3.firebaseapp.com",
  projectId: "summarist-80da3",
  storageBucket: "summarist-80da3.firebasestorage.app",
  messagingSenderId: "976502703030",
  appId: "1:976502703030:web:090213f7a71df86e53b717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);