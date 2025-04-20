import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
const navigate =useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/")
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        console.log(error);
        alert("you must be to register before login");
        setEmail("");
        setPass("");
        navigate("/RegisterPage")
      });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1> Log in to your account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
