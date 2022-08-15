import React from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import "./login.css";

const Login = () => {
 
  return (
    <div className="login">
      <form action="">
        <h1>Welcome back feller!</h1>
        <img src={Logo} alt="sorry there" style={{ width: "300px" }} />
        <label>Email:</label>
        <input placeholder='Enter Email' type="email" />
        <label>Password:</label>
        <input placeholder='Enter Password' type="password" />
        <button>Yeehaw</button>
        <h6>
          Not registered for the Rodeo yet?
          <span className="loginLink">
          <a href="/register">
            Register Now
          </a>
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Login;
