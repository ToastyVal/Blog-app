import React from "react";
import LandingPage from "../components/landingPage/landingpage";
import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";

function Landing() {
  return (
    <div>
      <NavBar title="Welcome to Goat Ropers&#174;"/>
      <LandingPage />
      <Footer />
    </div>
  );
}
export default Landing;
