import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const CLIENT_ID = "325993056792-47247cb348avodbeq6d8nsq1g3p94kle.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleAuthProvider clientId = {CLIENT_ID}>
    <AuthProvider>
    <App />
</AuthProvider>
</GoogleAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
