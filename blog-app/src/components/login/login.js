import React from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
 import "./login.css";

const Login = () => {
 return (
  <div className="login">
    <form action="">
    <h1>Welcome back feller!</h1>
    <img src={Logo} alt="sorry there" style={{ width: "300px" }} />
    
    <label> Email:</label>
        <input
          type="email"
          placeholder="Enter Email" />
    <label>Password:</label>
        <input type="password" placeholder="Enter password"/>
        <button>YEEHAW</button>
        <h6>

        
      
         Not registered for the Rodeo yet?
          <span className="loginLink">
             <a href="/register">Register Now</a>
           </span>
        </h6>
      </form>
     </div>
  );
 }

export default Login;
