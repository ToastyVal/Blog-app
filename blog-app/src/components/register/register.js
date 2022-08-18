import React, { useEffect, useState } from "react";
import {auth} from '../../firebase'
import Logo from "../../assets/goatRoperLogo_fixed.png";

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
    });
  };

  return (
    <div>
      <h1>Create an Account down yonder and join us!</h1>
      <img src={Logo} alt="sorry there" style={{ width: "300px" }} id="logoPic"/>

      <form>
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
        <button type="submit" onClick={handleClick}>
          Complete Registration
        </button>
      </form>
    </div>
  );
}

export default Register;
