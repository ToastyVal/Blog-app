import React from "react";
import Logo from '../../assets/goatRoperLogo_fixed.png';
import "./register.css";

const Register = () => {
  return (
    <div className="register">
        <h1>Create an Account down yonder and join us!</h1>
        <img classname="logo" src={Logo} alt="sorry there" style={{ width: "300px" }} />
      <form className="register-form">
        <label>Enter Email:</label>
        <input type="email" placeholder="Enter Email" required />
        <label>Enter a Username:</label>
        <input type="text" placeholder="Enter a Username" required />
        <label>Enter a Password:</label>
        <input type="password" placeholder="Enter a Password" required />
        <label>Confirm Password: </label>
        <input type="password" placeholder="Confirm Password" required />
        <button className="submit" type="submit">Complete Registration</button>
      </form>
    </div>
  );
};

export default Register;
