import React, { useRef } from "react";
import { auth } from "../firebase";
import "./login.css";

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch( err => {
            console.log(err)
        })
    }
  return (
    <div className="login">
      <form action="">
        <h1>Welcome back feller!</h1>
        <img
          src="../assets/GoatRoperslogo.png"
          alt="sorry there"
          style={{ width: "45px" }}
        />
        <label>Email:</label>
        <input ref={emailRef} type="email" />
        <label>Password:</label>
        <input ref={passwordRef} type="password" />
        <button>Yeehaw</button>
        <h6>
          Not registered for the Rodeo yet?
          <span onClick={register} className="loginLink">
              Register
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Login;
