import React, { useState } from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const loginInfo = { userName, email, password };
    console.log(loginInfo);
  };

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res.user);
      });
    }
    setEmail("");
    setPassword("");
    setUserName("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h1>Create an Account down yonder and join us!</h1>
      <img src={Logo} alt="sorry there" style={{ width: "300px" }} />
      <form onSubmit={register} name="registration_form">
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
