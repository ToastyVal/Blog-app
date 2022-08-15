import React from "react";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import NavBar from "../components/navBar/navBar";

function LoginPage() {
    return (
        <div>
            <NavBar />
            <Login />
            <Footer /> 
        </div>
    )
}

export default LoginPage;