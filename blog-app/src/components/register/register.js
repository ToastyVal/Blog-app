import React from "react";
import Logo from '../../assets/goatRoperLogo_fixed.png';

const Register = () => {
  return (
    <div>
        <h1>Create an Account down yonder and join us!</h1>
        <img src={Logo} alt="sorry there" style={{ width: "300px" }} />
      <form>
        <label>Enter Email:</label>
        <br />
        <input type="email" placeholder="Enter Email" required />
        <br />
        <label>Enter a Username:</label>
        <br />
        <input type="text" placeholder="Enter a Username" required />
        <br />
        <label>Enter a Password:</label>
        <br />
        <input type="password" placeholder="Enter a Password" required />
        <br />
        <label>Confirm Password: </label>
        <br />
        <input type="password" placeholder="Confirm Password" required />
        <br />
        <button type="submit">Complete Registration</button>
      </form>
    </div>
  );
};

export default Register;
