import { React, useState, setState }from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import {signInWithEmailAndPassword, sendEmailVerification} from '../../firebase';
import {auth} from '../../firebase';
  import {useHistory} from 'react-router-dom';
  import {useAuthValue} from '../../authContext';
import "./login.css";

const Login = () => {
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          history.push('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      history.push('/')
    }
    })
    .catch(err => setError(err.message))
  }
  return (
    <div className="login">
      <form onSubmit={login} name='login_form'>
        <h1>Welcome back feller!</h1>
        <img src={Logo} alt="sorry there" style={{ width: "300px" }} />
        <label>Email:</label>
        <input placeholder="Enter Email" type="email" value={} />
        <label>Password:</label>
        <input placeholder="Enter Password" type="password" value={} />
        <button>Yeehaw</button>
        <h6>
          Not registered for the Rodeo yet?
          <span className="loginLink">
            <a href="/register">Register Now</a>
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Login;
