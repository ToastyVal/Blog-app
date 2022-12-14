import React, { useEffect, useState } from "react";
import { auth } from '../../firebase'
import Logo from "../../assets/goatRoperLogo_fixed.png";
import "./register.css";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const loginInfo = { userName, email, password };
    console.log(loginInfo);

    fetch("http://localhost:8080/blog/addLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    }).then((e) => {
      console.log("new login info was made");
      //made an alert for when a login has been made
      alert("Thank you for giving us your info!")
      alert("We at goatropers value our herd and will not sell your info")
      alert("... well unless it's for a great price then we will")
      alert("but don't worry we wont tell you so you don't need to stress over it")
    });
  };

  return (
    <div className="register">
      <h1>Create an Account down yonder and join us!</h1>
      <img classname="logo" src={Logo} alt="sorry there" />

      <form className="register-form">
        <label>Enter Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Enter a Username:</label>
        <br />
        <input
          type="text"
          placeholder="Enter a Username"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Enter a Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter a Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password: </label>
        <br />
        <input type="password" placeholder="Confirm Password" required />
        <br />
        <button type="submit" onClick={handleClick} className="registerBtn">
          Complete Registration
        </button>
      </form>
    </div>
  );
}

export default Register;
