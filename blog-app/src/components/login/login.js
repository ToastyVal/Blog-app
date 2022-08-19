import React from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import "./login.css";
import QR from "../../assets/QRCode.png"

const Login = () => {
 
  return (
    <div className="login">
      <h1>Welcome back feller!</h1>
      <img className="goat-logo" src={Logo} alt="sorry there"/>
      <form action="" className="form">
        {/* <h1>Welcome back feller!</h1> */}
        <label>Email:</label>
        <input placeholder='Enter Email' type="email" />
        <label>Password:</label>
        <input placeholder='Enter Password' type="password" />
        <button className="button">Yeehaw</button>
        <h6 className="register-link">
          Not registered for the Rodeo yet?
          <span className="loginLink">
          <a href="/register">
            Register Now
          </a>
          </span>
        </h6>
      </form>
      <img className="QRLogin" src={QR} />
    </div>
  );
};

export default Login;