import React from "react";
import Logo from "../../assets/goatRoperLogo_fixed.png";
import "../landingPage/landingpage.css"

const LandingPage = () => {
  return (
    <div className="landing">
      <img classname="landing--logo" src={Logo} alt="sorry there" style={{width: "500px", position:"relative", left: "400px", margin:"0px 0px 60px 0px"}}/>
    </div>
  );
};
export default LandingPage;
