import React from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import "../landingPage/landingpage.css"

const LandingPage = () => {
  return (
    <div className="landing">
      <h1 className="landing--H1">Welcome to Goat Ropers&#174;</h1>
      <img classname="landing--logo" src={Logo} alt="sorry there" style={{width: "500px", position:"relative", left: "400px"}}/>
    </div>
  );
};
export default LandingPage;
